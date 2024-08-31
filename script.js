document.addEventListener('DOMContentLoaded', () => {
    const componentKD2 = document.getElementById('component-kd2');
    const componentKD1 = document.getElementById('component-kd1');
    const wire1 = document.getElementById('wire-1');
    const wire2 = document.getElementById('wire-2');

    componentKD2.addEventListener('click', () => {
        // Подсвечиваем компоненты и провода
        componentKD2.classList.toggle('highlight');
        componentKD1.classList.toggle('highlight');
        wire1.classList.toggle('highlight');
        wire2.classList.toggle('highlight');
    });

});
