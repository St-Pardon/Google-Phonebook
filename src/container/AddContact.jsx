import React from "react";
import {IconContext} from "react-icons"
import {  AiOutlineMail, AiOutlineDown } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { MdOutlineLocalPhone, MdOutlineAddAPhoto, MdOutlineLink, MdOutlineGroupWork } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";

const AddContact = () => {
  return(
    <form action="" id="add-contact">
      {/* add photo input */}
    <div className="image-input-div">
      <IconContext.Provider value={addPhoto}>
        <label htmlFor="image" className="img-lab"><MdOutlineAddAPhoto />
        <input type="file" name="image" className="img-input" accept="image/png, image/jpeg" />
        </label>
      </IconContext.Provider>
    </div>
    {/* add name input */}
    <div className="username">
      <div className="form-input" >
        <label htmlFor="name" className="label-icon"><FaRegUser /></label>
        <div className="right-half">
            <div>
              <fieldset>
                <legend></legend>
                <input type="text" placeholder="Name prefix" />
              </fieldset>
              <fieldset>
                <legend></legend>
                <input type="text" placeholder="First name" />
              </fieldset>
              <fieldset>
                <legend></legend>
                <input type="text" placeholder="Middle name" />
              </fieldset>
              <fieldset>
                <legend></legend>
                <input type="text" placeholder="Last name" />
              </fieldset>
              <fieldset>
                <legend></legend>
                <input type="text" placeholder="Name suffix" />
              </fieldset>
            </div>
            <div className='additional-input'>
              <fieldset>
                <legend></legend>
                  <input type="text" placeholder="Phonetic first name" />
                </fieldset>
              <fieldset>
                <legend></legend>
                  <input type="text" placeholder="Phonetic middle name" />
                </fieldset>
              <fieldset>
                <legend></legend>
                  <input type="text" placeholder="Phonetic last name" />
                </fieldset>
              <fieldset>
                <legend></legend>
                  <input type="text" placeholder="Nickname" />
                </fieldset>
              <fieldset>
                <legend></legend>
                  <input type="text" placeholder="File as" />
              </fieldset>
            </div>
          </div>
        <div id='more-name-option'><AiOutlineDown /></div>
      </div>
    </div>
    {/* add company input */}
    <div className="form-input">
      <label htmlFor="phone" className="label-icon" ><BsBuilding /></label>
      <div className="right-half">
        <fieldset>
          <legend></legend>
          <input type="text" placeholder="Company" />
        </fieldset>
        <fieldset>
          <legend></legend>
          <input type="text" placeholder="Department" />
        </fieldset>
        <fieldset>
          <legend></legend>
          <input type="text" placeholder="Title" />
        </fieldset>
      </div>
    </div>
    {/* add phone input */}
    <div className="form-input">
      <label htmlFor="phone" className="label-icon" ><MdOutlineLocalPhone /></label>
      <div className="right-half">
        <fieldset>
          <legend></legend>
          <input type="tel" placeholder="Phone" />
        </fieldset>
        <fieldset className="group-select-fieldset">
          <legend>Label</legend>
          <select name="" id="phone-no-type">
            <option value="No Label">No Label</option>
            <option value="Mobile" selected>Mobile</option>
            <option value="Work">Work</option>
            <option value="Home">Home</option>
            <option value="Main">Main</option>
            <option value="Work Fax">Work Fax</option>
            <option value="Home Fax">Home Fax</option>
            <option value="Pager">Pager</option>
            <option value="Other">Other</option>
            <option value="Custom">Custom</option>
          </select>
        </fieldset>
      </div>
    </div>
    {/* add email input */}
    <div className="form-input">
      <label htmlFor="email" className="label-icon"><AiOutlineMail /></label>
      <div className="right-half">
        <fieldset>
          <legend></legend>
          <input type="email" placeholder="Email" />
        </fieldset>
        <fieldset className="group-select-fieldset">
          <legend>Label</legend>
          <select name="" id="email-type">
            <option value="No Label">No Label</option>
            <option value="Home" selected>Home</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
            <option value="Custom">Custom</option>
          </select>
        </fieldset>
      </div>
    </div>
    <div className="form-input">
      <label htmlFor="address" className="label-icon"><RiMapPin2Line /></label>
      <div className="right-half">
        <fieldset>
          <legend></legend>
          <input type="text" placeholder="Address" />
        </fieldset>
        <fieldset className="group-select-fieldset">
          <legend>Label</legend>
          <select name="" id="address-type">
            <option value="No Label">No Label</option>
            <option value="Home" selected>Home</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
            <option value="Custom">Custom</option>
          </select>
        </fieldset>
      </div>
    </div>
    <div className="form-input">
      <label htmlFor="phone" className="label-icon"><MdOutlineLink /></label>
      <div className="right-half">
        <fieldset>
          <legend></legend>
          <input type="text" placeholder="Website" />
        </fieldset>
      </div>
    </div>
    <div className="form-input">
      <label htmlFor="significant-date" className="label-icon" ><IoMdCalendar /></label>
      <div className="right-half">
      <fieldset>
        <legend></legend>
        <input type="date" placeholder="Significant date" />
      </fieldset>
      <fieldset className="group-select-fieldset">
        <legend>Label</legend>
        <select name="" id="significant-date-type">
          <option value="No Label">No Label</option>
          <option value="Birthday" selected>Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
          <option value="Custom">Custom</option>
        </select>
      </fieldset>
      </div>
    </div>
    <div className="form-input">
      <label htmlFor="relationship" className="label-icon"><MdOutlineGroupWork /></label>
      <div className="right-half">
        <fieldset>
          <legend></legend>
          <input type="text" placeholder="Relationship" />
        </fieldset>
        <fieldset className="group-select-fieldset">
          <legend>Label</legend>
          <select name="" id="relationship-type">
            <option value="No Label">No Label</option>
            <option value="Assistant" selected>Assistant</option>
            <option value="Brother">Brother</option>
            <option value="Child">Child</option>
            <option value="Domestic Partner">Domestic Partner</option>
            <option value="Father">Father</option>
            <option value="Friend">Friend</option>
            <option value="Manager">Manager</option>
            <option value="Mother">Mother</option>
            <option value="Parent">Parent</option>
            <option value="Parner">Parner</option>
            <option value="Referred by">Referred by</option>
            <option value="Relative">Relative</option>
            <option value="Sister">Sister</option>
            <option value="Spouse">Spouse</option>
            <option value="Custom">Custom</option>
          </select>
        </fieldset>
      </div>
    </div>
  </form>
  )
}

// font styles.......

const addPhoto = {
  style:{
    fontSize: '20px', 
    color: "white", 
    marginTop:"11px",
    marginLeft:"2px", 
    transform: "scaleX(-1)"
  }
}
export default AddContact;