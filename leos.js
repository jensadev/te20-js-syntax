// import javax.swing.*;

// public class pythagoras{
// 	public static void main (String[] arg) {
// 	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
// 	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
// 	double c = Math.sqrt(a*a + b*b);
// 	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
// 	}
// }

// ni behöver 2 inmatningar och sedan en uträkning och en utskrift

const a = document.querySelector('#input-field');
const b = document.querySelector('#input-fielda');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const a = a.value;
    const b = b.value;
    const c = Math.sqrt(a*a + b*b)
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `hypetenusan är ${c} cm`;
    messageBox.appendChild(message);
});