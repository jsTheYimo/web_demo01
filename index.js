//1 用循环创建所有小方块 3000 个 .square
generateSquare()

function generateSquare() {
    const container = document.getElementById("container");
    for (let i = 0; i < 3000; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    }

    //2 绑定鼠标移入和移除事件
    //鼠标移入
    container.onmouseover = function (e) {
        let target = e.target;
        if (target.className == 'square') {
            setColor(target);
        }
    }

    //鼠标移出
    container.onmouseout = function (e) {
        let target = e.target;
        if (target.className == 'square') {
            delectColor(target);
        }
    }
}


//3 设置小方块变色函数，且绑定到移入事件中
function setColor(element) {

    function getNum() {
        return Math.floor((Math.random() * 255) + 1)
    }
    element.style.backgroundColor = 'rgb(' + getNum() + ',' + getNum() + ',' + getNum() + ')';
}

//4 设置去色函数，且绑定带移出事件中
function delectColor(element) {
    element.style.backgroundColor = 'rgb(62, 60, 60, .65)';
}