import { Button } from '@mui/material'
import React from 'react'
import { USER_LOGOUT } from '../../api/endPoints'
import CVTemplate from '../CVTemplate'
import Layout from '../Layout'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const printDocument=()=>{
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: [12, 12]});
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  const navigate = useNavigate()

  return (
    <Layout>
      <div>
        <h1>Dashboard</h1>
        <div className='space'>
          <Button variant='contained' onClick={()=>printDocument()} endIcon={<FileDownloadIcon/>}>Download</Button>{" "}
          <Button variant='contained' onClick={()=>navigate("/edit")} endIcon={<ModeEditIcon/>}>Editor</Button>
        </div>
        <CVTemplate/>
    </div>
    </Layout>
  )
}

export default Dashboard