document.addEventListener("DOMContentLoaded", function() {
    const label = document.getElementById('openModalLabel');
    const modal = new bootstrap.Modal(document.getElementById('rgpdModal'));
    const checkbox = document.getElementById('flexCheckDefault');
    const acceptButton = document.querySelector('.modal-footer .btn');


    label.addEventListener('click', function(event) {
        event.preventDefault();
        modal.show();
    });


    acceptButton.addEventListener('click', function() {
        checkbox.checked = true;
        modal.hide();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fechas = [
        "01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024",
        "06/03/2024", "07/03/2024", "08/03/2024", "09/03/2024", "10/03/2024",
        "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024", "15/03/2024"
    ];

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    
    function obtenerHorarios(dia) {
        if (dia === "Sábado" || dia === "Domingo") {
            return `
            <div class="horariosMT d-flex align-items-center justify-content-start flex-column">
                <div class="manana d-flex align-items-center justify-content-center">
                    <p class="festivo">Festivo</p>
                </div>
            </div>`;
        } else {
            return `
            <div class="horariosMT">
                <div class="manana d-flex align-items-center justify-content-center">
                    <p>Mañana:</p>
                    <div class="horario">09:00</div>
                    <img src="/assets/img/check.svg" alt="">
                    <p>-</p>
                    <div class="horario">11:00</div>
                    <img src="/assets/img/check.svg" alt="">
                    <p>2h</p>
                </div>
                <div class="tarde d-flex align-items-center justify-content-center">
                    <p>Tarde:</p>
                    <div class="horario">14:00</div>
                    <img src="/assets/img/check.svg" alt="">
                    <p>-</p>
                    <div class="horario">16:00</div>
                    <img src="/assets/img/check.svg" alt="">
                    <p>2h</p>
                </div>
            </div>`;
        }
    }

    const calendario = fechas.map((fecha, index) => {
        const dia = dias[index % dias.length]; 
        return {
            fecha: fecha,
            dia: dia,
            horario: obtenerHorarios(dia),
            esFestivo: dia === "Sábado" || dia === "Domingo" 
        };
    });

    
    const tbody = document.querySelector('.table tbody');

    
    let tbodyContent = '';
    calendario.forEach(({ fecha, dia, horario, esFestivo }) => {
        
        const claseFestivo = esFestivo ? 'festivo' : '';
        tbodyContent += `
        <tr>
            <td class="${claseFestivo}">${fecha}</td>
            <td class="${claseFestivo}">${dia}</td>
            <td>${horario}</td>
        </tr>`;
    });

    
    tbody.innerHTML = tbodyContent;
});


document.addEventListener("DOMContentLoaded", function() {
    const asistenciaDiv = document.getElementById('openAsistenciaModal');

    const asistenciaModal = new bootstrap.Modal(document.getElementById('asistenciaModal'));

    asistenciaDiv.addEventListener('click', function() {
        asistenciaModal.show();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const chatbotDiv = document.getElementById('openChatbotModal');
    const solicitarQrDiv = document.getElementById('openSolicitarQrModal');

    const chatbotModal = new bootstrap.Modal(document.getElementById('chatbotModal'));
    const solicitarQrModal = new bootstrap.Modal(document.getElementById('solicitarQrModal'));

    chatbotDiv.addEventListener('click', function() {
        chatbotModal.show();
    });

    solicitarQrDiv.addEventListener('click', function() {
        solicitarQrModal.show();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const entrarBtn = document.getElementById('entrarBtn');

    entrarBtn.addEventListener('click', function() {
        window.location.href = '/index.html';
    });
});

