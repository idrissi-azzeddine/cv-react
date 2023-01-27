import React, { useState } from 'react';
import {
MDBInput,
MDBBtn,
MDBRow,
MDBTextArea,
MDBCol,
MDBContainer,
MDBFile
} from 'mdb-react-ui-kit';

export default function Sect() {
const [formValue, setFormValue] = useState({
fname: '',
lname: '',
age: '',
email: '',
tele: '',
fix: '',
site: '',
année: '',
carrière: '',
année2: '',
carrière2: '',
année3: '',
carrière3: '',
parcour: '',
annéep: '',
compétence: '',
photo: '',
state: '',
message: '',
francais: '',
anglais: '',
german: '',
adress: '',
});

const handleChange = (event) => {
const {name, type, value, checked} = event.target;
setFormValue((pre) => {
return {
...pre,
[name]: type === "checkbox" ? checked : value
}
});
};
console.log(formValue);


$(document).ready(function () {
    $('.zwei').hide();
    $('.drei').hide();
    $('.fier').hide();
    $('.funf').hide();
    var cpt = 0;
    var cpt2 = 0;
    $('.inbtn').click(function () {
        cpt = cpt + 1;
        if (cpt > 1) {
            $('.drei').show();
        } else {
            $('.zwei').show();
        } if (cpt > 2) {
            cpt = 0;
        }
    })
    $('.inbtn2').click(function () {
        cpt2 = cpt2 + 1;
        if (cpt2 > 1) {
            $('.funf').show();
        } else {
            $('.fier').show();
        } if (cpt2 > 2) {
            cpt2 = 0;
        }
    })
    $('.hi').click(function () {
        $('.zwei').hide();
    })
    $('.hi2').click(function () {
        $('.drei').hide();
    })
    $('.hi3').click(function () {
        $('.fier').hide();
    })
    $('.hi4').click(function () {
        $('.funf').hide();
    })
    
});



return (
<MDBRow tag="form" className='g-3'>








    <MDBCol md="4">
        <MDBInput value={formValue.fname} name='fname' onChange={handleChange} id='validationCustom01' required
            label='First name' />
    </MDBCol>
    <MDBCol md="4">
        <MDBInput value={formValue.lname} name='lname' onChange={handleChange} id='validationCustom02' required
            label='Last name' />
    </MDBCol>
    <MDBCol md="4">
        <MDBInput value={formValue.age} name='age' onChange={handleChange} id='validationCustom02' required
            label='Age' />
    </MDBCol>







    <MDBCol md="6">
        <MDBInput value={formValue.email} name='email' onChange={handleChange} id='validationCustom03' required
            label='Email' />
    </MDBCol>
    <MDBCol md="6">
        <MDBInput value={formValue.zip} name='adress' onChange={handleChange} id='validationCustom05' required
            label='Adresse' />
    </MDBCol>









    <MDBCol md="4">
        <MDBInput value={formValue.tele} name='tele' onChange={handleChange} id='validationCustom03' required
            label='Number' />
    </MDBCol>
    <MDBCol md="4">
        <MDBInput value={formValue.fix} name='fix' onChange={handleChange} id='validationCustom05' required
            label='Fix' />
    </MDBCol>
    <MDBCol md="4">
        <MDBFile  id='formFileLg' onChange={handleChange} value={formValue.photo} name='photo' />
    </MDBCol>





    <MDBCol md="12">
        <MDBInput value={formValue.site} name='site' onChange={handleChange} id='validationCustom05' required
            label='https://beispiel.com/' />
    </MDBCol>








    <MDBCol size='12'>
        <MDBTextArea label='Message' id='textAreaExample' name='message' value={formValue.message} onChange={handleChange} rows={4} />
    </MDBCol>








    <MDBCol size='2'>
        <MDBInput value={formValue.année} type='number' name='année' onChange={handleChange} id='validationCustom05'
            required label='Année' />
    </MDBCol>
    <MDBCol size='9'>
        <MDBInput value={formValue.carrière} name='carrière' onChange={handleChange} id='validationCustom05' required
            label='carrière' />
    </MDBCol>
    <MDBCol size='1' className='bg-light d-flex align-items-center justify-content-center'>
        <MDBBtn type='button' className='inbtn'>
            <i className="fa-solid fa-plus"></i>
        </MDBBtn>
    </MDBCol>

    
    <MDBCol size='2' className='zwei'>
    <MDBInput value={formValue.année} type='number' name='année' className='zwei' onChange={handleChange} id='validationCustom05'
            required label='Année' />
    </MDBCol>
    <MDBCol size='9' className='zwei'>
        <MDBInput value={formValue.carrière} name='carrière' className='zwei' onChange={handleChange} id='validationCustom05' required
            label='carrière' />
    </MDBCol>
    <MDBCol size='1' className='zwei'  >
        <MDBBtn type='button' className='hi bg-danger'>
            <i class="fa-solid fa-xmark"></i>
        </MDBBtn>
    </MDBCol>

     

    <MDBCol size='2' className='drei'>
    <MDBInput value={formValue.année} type='number' name='année' className='drei' onChange={handleChange} id='validationCustom05'
            required label='Année' />
    </MDBCol>
    <MDBCol size='9' className='drei'>
        <MDBInput value={formValue.carrière} name='carrière' className='drei' onChange={handleChange} id='validationCustom05' required
            label='carrière' />
    </MDBCol>
    <MDBCol size='1' className='drei' >
    <MDBBtn type='button' className='hi2 bg-danger'>
        <i class="fa-solid fa-xmark"></i>
    </MDBBtn>
    </MDBCol>







    <MDBCol size='2'>
        <MDBInput value={formValue.annéep} type='number' name='annéep' onChange={handleChange} id='validationCustom05'
            required label='Année' />
    </MDBCol>
    <MDBCol size='9'>
        <MDBInput value={formValue.parcour} name='parcour' onChange={handleChange} id='validationCustom05' required
            label='Parcours Scolaire' />
    </MDBCol>
    <MDBCol size='1' className='bg-light d-flex align-items-center justify-content-center'>
        <MDBBtn type='button' className='inbtn2' >
            <i className="fa-solid fa-plus"></i>
        </MDBBtn>
    </MDBCol>







    <MDBCol size='2' className='fier'>
        <MDBInput value={formValue.annéep} type='number' className='fier' name='annéep' onChange={handleChange} id='validationCustom05'
            required label='Année' />
    </MDBCol>
    <MDBCol size='9' className='fier'>
        <MDBInput value={formValue.parcour} name='parcour' className='fier' onChange={handleChange} id='validationCustom05' required
            label='Parcours Scolaire' />
    </MDBCol>
    <MDBCol size='1' className='fier'>
        <MDBBtn type='button' className='hi3 bg-danger' >
            <i class="fa-solid fa-xmark"></i>
        </MDBBtn>
    </MDBCol>



    <MDBCol size='2' className='funf'>
        <MDBInput value={formValue.annéep} type='number' className='funf' name='annéep' onChange={handleChange} id='validationCustom05'
            required label='Année' />
    </MDBCol>
    <MDBCol size='9' className='funf'>
        <MDBInput value={formValue.parcour} name='parcour' className='funf' onChange={handleChange} id='validationCustom05' required
            label='Parcours Scolaire' />
    </MDBCol>
    <MDBCol size='1' className='funf'>
        <MDBBtn type='button' className='hi4 bg-danger' >
            <i class="fa-solid fa-xmark"></i>
        </MDBBtn>
    </MDBCol>



    









    <MDBCol size='11'>
        <MDBInput value={formValue.compétence} name='compétence' onChange={handleChange} id='validationCustom05'
            required label='Compétences' />
    </MDBCol>
    <MDBCol size='1' className='bg-light d-flex align-items-center justify-content-center'>
        <MDBBtn type='button' className='inbtn'>
            <i className="fa-solid fa-plus"></i>
        </MDBBtn>
    </MDBCol>






    <MDBCol size='12' className='mb-3'>
        <p> Les language </p>
        <MDBContainer>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={handleChange.anglais} name='anglais' onChange={handleChange} id="ang" /> 
                        <label className="form-check-label" htmlFor="ang"> Anglais </label>
                    </div>
                </li>
                <li className='list-group-item'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={handleChange.francais} name='francais' onChange={handleChange} id="fra" /> 
                        <label className="form-check-label" htmlFor="fra"> Francais </label>
                    </div>
                </li>
                <li className='list-group-item'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={handleChange.german} name='german' onChange={handleChange} id="ger" /> 
                        <label className="form-check-label" htmlFor="ger"> German </label>
                    </div>
                </li>
            </ul>
        </MDBContainer>
    </MDBCol>









    <MDBCol size='12'>
        <div className='form-check form-switch'>
            <input className='form-check-input' type='checkbox' id='state' defaultChecked={formValue.state}
                onChange={handleChange} name='state' />
            <label className='form-check-label' htmlFor="state"> Agree to terms and conditions </label>
        </div>
    </MDBCol>
    <MDBCol size="12">
        <MDBBtn type='button' id='existing-button'> Créer mon cv </MDBBtn>
    </MDBCol>
</MDBRow>
);
}