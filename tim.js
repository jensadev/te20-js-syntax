// import javax.swing.*;
// import java.awt.*;
// import java.util.*;

// public class Buss{

// public static void main(String[] args) {
//           int alder = Integer.parseInt(JOptionPane.showInputDialog("Hur gammal ar du (nummer)"));
// 		  int pris;
// 		  pris = 0;
// 		  if ( alder>6 )
// 		  pris = 15;
// 	  if ( alder>18 )
// 		  pris = 21;
// 	  if ( alder> 27 )
// 		  pris = 28;
// 	  if ( alder> 64 )
// 		  pris = 21;
//    JOptionPane.showMessageDialog(null, + pris + "kr ar ditt pris");
// }
// }

let age = parseInt(prompt('Hur gammal är du?'));

if (age < 6) {
    alert('Du får åka gratis');
} else if (age < 18) {
    alert('Du betalar 15 kr');
} else if (age < 27) {
    alert('Du betalar 21 kr');
} else if (age < 64) {
    alert('Du betalar 28 kr');
} else {
    alert('Du betalar 21 kr');
}
