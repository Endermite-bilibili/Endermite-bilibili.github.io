const NotificationInstance = Notification || window.Notification;
if (!!NotificationInstance) {
    const permissionNow = NotificationInstance.permission;
    if (permissionNow === 'granted') {//允许通知
        CreatNotification();
    } else if (permissionNow === 'denied') {
        console.log('用户拒绝了你!!!');
    } else {
        setPermission();
    }
    function setPermission() {
        //请求获取通知权限
        NotificationInstance.requestPermission(function (PERMISSION) {
            if (PERMISSION === 'granted') {
				GrantedNotification();
                //CreatNotification();
            } else {
                console.log('用户无情残忍的拒绝了你!!!');
            }
        });
    }
	function GrantedNotification() {
	console.log('用户允许了通知.');
        const n_1 = new NotificationInstance('Ender_Mite的小站：', {
            body: '感谢允许通知！对于本小站有任何建议的，都可以在留言板提出哦.(本站所有通知若不操作10秒自动关闭。)',
            tag: '1ue',
            icon: '/images/yuan.jpg',
			requireInteraction: true,
            data: {
                url: '#'
            }
        });
	n_1.onshow = function () {
            console.log('通知显示了！');
        }
        n_1.onclick = function (e) {
            //可以直接通过实例的方式获取data内自定义的数据
            //也可以通过访问回调参数e来获取data的数据
            //window.open(n.data.url, '_blank');
			window.focus();
            n.close();
        }
        n_1.onclose = function () {
            console.log('你枪毙了我！！！');
			CreatNotification();
        }
        n_1.onerror = function (err) {
            console.log('出错了，可以联系Ender_MIte：1.通过关于界面留言。2.发送邮件至：3014948093@qq.com');
            throw err;
        }
        setTimeout(() => {
            n_1.close();
        }, 10000);
    }
    function CreatNotification() {
        const n = new NotificationInstance('Ender_Mite的小站：', {
            body: '由于误删除数据库，之前评论全部失效，请见谅，对不起！',
            tag: '2ue',
            icon: '/images/yuan.jpg',
			requireInteraction: true,
            data: {
                url: '#'
            }
        });
        n.onshow = function () {
            console.log('通知显示了！');
        }
        n.onclick = function (e) {
            //可以直接通过实例的方式获取data内自定义的数据
            //也可以通过访问回调参数e来获取data的数据
            //window.open(n.data.url, '_blank');
			window.focus();
            n.close();
        }
        n.onclose = function () {
            console.log('你枪毙了我！！！');
        }
        n.onerror = function (err) {
            console.log('出错了，可以联系Ender_MIte：1.通过关于界面留言。2.发送邮件至：3014948093@qq.com');
            throw err;
        }
        setTimeout(() => {
            n.close();
        }, 10000);
    }
}