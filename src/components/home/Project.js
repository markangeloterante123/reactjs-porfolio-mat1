import React, { useState } from 'react'

import Nav from '../../components/Nav'

import Particles from '../../components/Particles'
import Footer from './Footer'
import ProjImage from '../../components/ProjImage'

const Project = () => {

	const [project, setProject] = useState ([
		{id:1, img: "../motor/in.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: POINT OF SALES"},
		{id:2, img: "../motor/in1.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: DISPLAY ITEM CATEGORY" },
		{id:3,img: "../motor/in2.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: INVENTORY RECORDS"},
		{id:4,img: "../motor/in3.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: POS COMPUTATION"},
		{id:5,img: "../motor/in4.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: PRINTABLE RECIEPT"},
		{id:6,img: "../motor/in5.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: ACCOUNT MANAGEMENT-AJAX"},
		{id:7,img: "../motor/in6.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: LANDING PAGES"},
		{id:8,img: "../motor/in7.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: MODAL ADD CATEGORY"},
		{id:9,img: "../motor/in8.png", proj: "INVENTORY-MOTOR", descrip:"FUNCTION: RETURN ITEM /REPLACEMENT-AJAX "},
		{id:10, img: "../beu/be1.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: POS-AJAX"},
		{id:11, img: "../beu/be2.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: POS-AJAX"},
		{id:13, img: "../beu/be3.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: POS-AJAX"},
		{id:14, img: "../beu/be4.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: MANAGE ITEM INFORMATION-AJAX"},
		{id:15, img: "../beu/be5.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: ITEM SALES RECORDS-AJAX"},
		{id:16, img: "../beu/be6.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: ADD NEW ITEM"},
		{id:17, img: "../beu/be7.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: POS RECORDS-AJAX"},
		{id:18, img: "../beu/be8.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: PRINTABLE RECORDS-AJAX"},
		{id:19, img: "../beu/be9.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: SALES INVOICE RECORDS-AJAX"},
		{id:20, img: "../beu/be10.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: RE-SELLERS RECORDS-AJAX"},
		{id:21, img: "../beu/be11.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: CHARTJS-AJAX"},
		{id:22, img: "../beu/be12.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: CHARTJS-AJAX"},
		{id:23, img: "../beu/be13.png", proj: "BEU-INVENTORY", descrip:"FUNCTION: ACCOUNT MANAGEMENT-AJAX"},
		{id:24,img: "../lms/lm.png", proj: "LMS",descrip:"FUNCTION: LEARNING MATERIALS MANAGEMENT-AJAX"},
		{id:25,img: "../lms/lm1.png", proj: "LMS",descrip:"FUNCTION: CHARTJS-AJAX"},
		{id:26,img: "../lms/lm2.png", proj: "LMS",descrip:"FUNCTION: STUDENT CONCERNS-AJAX"},
		{id:27,img: "../lms/lm3.png", proj: "LMS",descrip:"FUNCTION: STUDENT RECORDS, INFORMATION & ACC. MANAGEMENT-AJAX"},
		{id:28,img: "../lms/lm4.png", proj: "LMS",descrip:"FUNCTION: PRINTABLE GRADES-AJAX"},
		{id:29,img: "../lms/lm5.png", proj: "LMS",descrip:"FUNCTION: REGISTRAR MONITORING LIST-AJAX"},
		{id:30,img: "../lms/lm6.png", proj: "LMS",descrip:"FUNCTION: INSTRUCTORS CLASS VIEW MODE-AJAX"},
		{id:31,img: "../lms/lm7.png", proj: "LMS",descrip:"FUNCTION: SWAL ALERT-AJAX"},
		{id:32,img: "../lms/lm8.png", proj: "LMS",descrip:"FUNCTION: SIDE BAR AND CALENDAR"},
		{id:33,img: "../lms/lm9.png", proj: "LMS",descrip:"FUNCTION: OPEN CLASSROOM-AJAX"},
		{id:34,img: "../lms/lm10.png", proj: "LMS",descrip:"FUNCTION: GALLERY"},
		{id:35,img: "../lms/lm11.png", proj: "LMS",descrip:"FUNCTION: SHARABLE LEARNING MATERIALS-AJAX"},
		{id:36,img: "../lms/lm12.png", proj: "LMS",descrip:"FUNCTION: LEARNING MATERIALS"},
		{id:37,img: "../lms/lm13.png", proj: "LMS",descrip:"FUNCTION: VIEW SUBMITTED RECORDS-AJAX"},
		{id:38,img: "../lms/lm14.png", proj: "LMS",descrip:"FUNCTION: VIEW SUBMITTED RECORDS-AJAX"},
		{id:39,img: "../lms/lm15.png", proj: "LMS",descrip:"FUNCTION: VIEW SUBMITTED RECORS-AJAX"},
		{id:40,img: "../lms/lm16.png", proj: "LMS",descrip:"FUNCTION: UPLOAD ACTIVITY-AJAX"},
		{id:41,img: "../lms/lm17.png", proj: "LMS",descrip:"FUNCTION: JQUERY SHOW/HIDE DIV"},
		{id:42,img: "../lms/lm18.png", proj: "LMS",descrip:"FUNCTION: JQUERY SHOW/HIDE DIV"},
		{id:43,img: "../lms/lm19.png", proj: "LMS",descrip:"FUNCTION: GRADING SYSTEM-AJAX"},
		{id:44,img: "../lms/lm20.png", proj: "LMS",descrip:"FUNCTION: VIEW RECORDS-AJAX"},
		{id:45,img: "../lms/lm21.png", proj: "LMS",descrip:"FUNCTION: UPLOAD OR TAKE ONLINE"}
	])

	return (
		<div>
			<Nav />
			<div className="main-container">		
			 	<div className="container ">
					    <div className="row">
					    <Particles type="polygon" />
					    	<div className="container-carousel col-lg-12 col-md-10 col-sm-9 mx-auto">	
					    		<ProjImage img = { project } />
						   	</div>
						    <div className="footer col-lg-8 col-md-10 mx-auto">
					          	<Footer />
					        </div>			
					    </div>
				    <div className="circle1"></div>
					<div className="circle2"></div>
					<div className="circle3"></div>
					<div className="circle4"></div>
			  	</div>

			</div>
		 </div>
	)
}

export default Project