setInterval(() => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const hourdegree = h * 30 + m * (0.5);
    const mindegree = m * 6;
    const secdegree = s * 6;
    document.querySelector("div>#hours").style.transform = `rotate(${hourdegree}deg)`;
    document.querySelector("div>#minutes").style.transform = `rotate(${mindegree}deg)`;
    document.querySelector("div>#seconds").style.transform = `rotate(${secdegree}deg)`;
}, 1000)