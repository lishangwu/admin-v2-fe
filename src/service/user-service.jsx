import MUtil from 'util/mm.jsx';

const _mm = new MUtil()

class UserService{
    login(loginInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        });
    }
    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username)
        let password = $.trim(loginInfo.password)
        if(typeof username !== 'string' || username.length ===0){
            return {
                status: false,
                msg: 'username is null'
            }
        }
        if(typeof password !== 'string' || password.length ===0){
            return {
                status: false,
                msg: 'password is null'
            }
        }
        return {
            status : true,
            msg : 'check ok..'
        }
    }
    logout(){
        return _mm.request({
            type : 'post',
            url : '/user/logout.do'
        })
    }
    getUserList(pageNum){
        return _mm.request({
            type: 'post',
            url : '/manage/user/list.do',
            data : {
                pageNum: pageNum
            }
        })
    }

}

export default UserService;