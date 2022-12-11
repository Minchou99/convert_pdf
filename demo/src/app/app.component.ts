import {Component} from '@angular/core';
import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  public convertToPDF() {
    html2canvas(document.body).then(canvas => {
// Few necessary setting options

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      let width = pdf.internal.pageSize.getWidth();
      let height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
      pdf.save('demo.pdf'); // Generated PDF
    });
  }
}
