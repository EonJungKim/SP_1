<script>
    import Api from "../../js/Api";

    let userId = '';
    let userPwd = '';
    let idSave = false;

    function validate() {
        if (userId.trim() == '') {
            alert('ID를 입력해주세요.');
            return false;
        }

        if (userPwd.trim() == '') {
            alert('비밀번호를 입력해주세요.');
            return false;
        }

        return true;
    }

    async function login() {
        if (validate()) {
            const param = {
                userId : userId,
                userPwd : userPwd
            };
            console.log(param);

            const res = await Api.post('test/login.do', param);
            console.log(res);
        }
    }

    function callFindIdPwdPop() {

    }
</script>

<div>
    <div>
        <div style="display: inline-block;">
            <input type="text" id="txtId" style="display: block;" bind:value={userId} />
            <input type="password" id="txtPwd" style="display: block;" bind:value={userPwd}/>
        </div>
        <button style="height: 100%;" on:click={login}>로그인</button>
    </div>
    <div>
        <button on:click={callFindIdPwdPop}>ID/PWD 찾기</button>
        <label style="display: inline-block;">아이디 저장<input type="checkbox" bind:checked={idSave} /></label>
    </div>
</div>