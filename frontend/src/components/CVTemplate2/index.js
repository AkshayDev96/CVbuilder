import React from 'react'
import './CVTemplate2.css'


const CVTemplate = () => {

    return (
        <div id="divToPrint2" className='table-responsive box-cv2'>
            {/* heading */}
            <div className='body2'>
                {/* name */}
                <img src="/male-placeholder-image.jpeg" className='profile2' />
                <h3>Akshay Verma</h3>
                {/* adddress */}
                <p className='para2'>
                    Address: Sigra, varanasi, Uttar Pradesh, 221010,India
                </p>
                {/* email */}
                <p className='email2'>
                    Email: im.akshayverma0@gmail.com
                </p>
                {/* Career Object */}
                <h4>CAREER OBJECTIVE</h4>
                <p className='para2'>Want to be the part of a software developer organization and utilize my knowledge,Skills
                    and expertise to contribute towards organization and professional
                    brilliance and to learn more with the passage of time from all
                    types of situations and circumstances.</p>

                {/* EDUCATION AND QUALIIFICATIONS */}
                <h4>EDUCATION AND QUALIIFICATIONS</h4>
                <div className='edu2'>
                    <table className='table table-responsive' cellSpacing={4} cellPadding={4}>
                        <tr>
                            <th>SNo.</th>
                            <th>Qualification</th>
                            <th>Institution</th>
                            <th>Board/University</th>
                            <th>Percentage</th>
                            <th>Division</th>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                        </tr>
                    </table>
                </div>
                {/* WORK EXPERIENCE */}
                <h4>WORK EXPERIENCE</h4>
                <div className='workexp2'>
                    <table className='table table-responsive' cellSpacing={4} cellPadding={4}>
                        <tr>
                            <th>SNo.</th>
                            <th>Organization</th>
                            <th>Joining Location</th>
                            <th>CTC</th>
                            <th>Joining Date</th>
                            <th>Leaving Date</th>
                            <th>Technologies Worked on</th>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                        </tr>
                    </table>
                </div>
                {/* SKILLS */}
                <h4>TECHNICAL SKILLS</h4>
                <div className='skills2'>
                    <p className='para2'><strong>React:</strong> 96%</p>
                </div>

                {/* SOCIAL MEDIA */}
                <h4>SOCIAL MEDIA LINKS</h4>
                <div className='skills2'>
                    <p className='para2'><strong>Facebook:</strong> asdasd</p>
                    <p className='para2'><strong>Youtube:</strong> asdasd</p>
                </div>
            </div>
        </div>
    )
}

export default CVTemplate