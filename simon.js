// import javax.swing.*;
// import java.awt.*;

// public class Pi {
//     public static void main(String[] args) {
// 			int radie = Integer.parseInt(JOptionPane.showInputDialog("Vad ar cirkelns radie?"));
// 				double cirkela = radie*radie*3.1415926536;
// 				double cirkelo = radie*2*3.1415926536;
// 					JOptionPane.showMessageDialog(null, "Arean ar " + cirkela + " cm.");
// 					JOptionPane.showMessageDialog(null, "Omkretsen ar " + cirkelo + " cm.");
//     }
// }

const radiusInput = document.querySelector('#input-field');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const radius = radiusInput.value;
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `Arean är ${area} cm²`;
    messageBox.appendChild(message);
    message = document.createElement('p');
    message.textContent = `Omkretsen är ${circumference} cm`;
    messageBox.appendChild(message);
});