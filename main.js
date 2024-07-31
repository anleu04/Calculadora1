let calculadora=document.querySelector("#root");

calculadora.innerHTML=`

<main class="padre">
    
        <div class="calculator">
            <div class="display">
                <input type="text" class="display-input" disabled>
            </div>
            <div class="keypad">
                <button class="boton">7</button>
                <button class="boton">8</button>
                <button class="boton">9</button>
                <button class="boton del">DEL</button>
                <button class="boton">4</button>
                <button class="boton">5</button>
                <button class="boton">6</button>
                <button class="boton">+</button>
                <button class="boton">1</button>
                <button class="boton">2</button>
                <button class="boton">3</button>
                <button class="boton">-</button>
                <button class="boton">.</button>
                <button class="boton">0</button>
                <button class="boton">/</button>
                <button class="boton">*</button>
                <button class="boton reiniciar">REINICIAR</button>
                <button class="boton igual">=</button>
            </div>
        </div>
    
    </main>

`

