function toggleDevice(deviceId) {
    const checkbox = document.getElementById(deviceId);
    checkbox.checked = !checkbox.checked;
}

function selectRoom(room) {
    const tabs = document.getElementsByClassName('room-tab');
    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    document.querySelector(`.room-tab[onclick="selectRoom('${room}')"]`).classList.add('active');
}

function selectNav(nav) {
    const items = document.getElementsByClassName('nav-item');
    for (let item of items) {
        item.classList.remove('active');
    }
    document.querySelector(`.nav-item[onclick="selectNav('${nav}')"]`).classList.add('active');
}