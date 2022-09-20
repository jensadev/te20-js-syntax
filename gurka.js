// public class Beans {
// 	public static void main(String[] args) {
// 		String s = JOptionPane.showInputDialog("Hur mycket kostar gurkan");
// 		double momspris = Double.parseDouble(s);
// 		double pris = momspris / 1.25;
// 		double moms = pris * 0.25;
// 		String b = moms + "kr";	
// 		String c = pris + "kr";
// 		JOptionPane.showMessageDialog(null,"Gurkans moms är " + b + "och dess pris exklusive moms är " + c);
// 	}
// }

const gurkPrisInput = document.querySelector('#input-field');
const button = document.querySelector('button');

gurkPrisInput.addEventListener('keydown', function(e) {
    // console.log(e)
    if (e.key === 'Enter') {
        button.click(); 
        // calcMoms(gurkPrisInput.value);
    }
});

button.addEventListener('click', () => {
    const gurkPris = gurkPrisInput.value;

    const moms = gurkPris * 0.25;
    const pris = gurkPris - moms; // Ny matte inte Alberts matte
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `Gurkans moms är ${moms}kr och dess pris exklusive moms är ${pris}kr`;
    messageBox.appendChild(message);
});