import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'component/page-title/index.jsx';
import ListSearch   from './index-list-search.jsx';
import TableList    from 'util/table-list/index.jsx';
import Pagination   from 'util/pagination/index.jsx';

import MUtil        from 'util/mm.jsx'
import OrderService         from 'service/order-service.jsx'



const _mm   = new MUtil();
const orderService = new OrderService();

class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : [],
            pageNum : 1,
            listType : 'list' // list ,search
        }
    }
    componentDidMount(){
        this.loadOrderList()
    }
    loadOrderList(){
        let listParam = {};
        listParam.listType = this.state.listType;
        listParam.pageNum = this.state.pageNum;
        if('search' === this.state.listType){
            listParam.orderNo = this.state.orderNumber;
        }
        orderService.getOrderList(listParam).then(res=>{
            this.setState(res)
        }, errMsg=>{
            this.setState({
                list: []
            });
            _mm.errorTips(errMsg)
        })
    }
    onSearch(orderNumber){
        let listType = orderNumber === '' ? 'list' : 'search'
        this.setState({
            listType        : listType,
            pageNum         : 1,
            orderNumber     : orderNumber
        }, ()=>{
            this.loadOrderList()
        })
    }

    onPageNumChange(pageNum){
        this.setState({
            pageNum : pageNum
        }, () => {
            this.loadOrderList();
        });
    }

    render() {
        let tableHeads = ['订单号', '收件人', '订单状态', '订单总价', '创建时间', '操作'];

        let listBody = this.state.list.map((order, index) => {
            return (
                <tr key={index}>
                    <td>
                        <Link to={ `/order/detail/${order.orderNo}` }>{order.orderNo}</Link>
                    </td>
                    <td>{order.receiverName}</td>
                    <td>{order.statusDesc}</td>
                    <td>￥{order.payment}</td>
                    <td>{order.createTime}</td>
                    <td>
                        <Link to={ `/order/detail/${order.orderNo}` }>详情</Link>
                    </td>
                </tr>
            );
        });
        return (
            <div id="page-wrapper">
                <PageTitle title="订单列表" />
                <ListSearch onSearch={(orderNumber) => {this.onSearch(orderNumber)}}/>
                <TableList tableHeads={tableHeads}>
                    {listBody}
                </TableList>
                <Pagination current={this.state.pageNum}
                            total={this.state.total}
                            onChange={ (pageNum) => this.onPageNumChange(pageNum) }
                />
            </div>
        );
    }
}

export default index;