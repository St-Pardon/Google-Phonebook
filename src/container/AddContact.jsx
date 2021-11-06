import React, { useState } from 'react';
import Inputs from '../component/Inputs';
import { IconContext } from 'react-icons';
import { AiOutlineMail, AiOutlineDown } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';
import {
  MdOutlineLocalPhone,
  MdOutlineAddAPhoto,
  MdOutlineLink,
  MdOutlineGroupWork,
} from 'react-icons/md';
import { RiMapPin2Line } from 'react-icons/ri';
import { IoMdCalendar } from 'react-icons/io';

const AddContact = ({ addContact }) => {
  const [namePrefix, setNamePrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nameSuffix, setNameSuffix] = useState('');
  const [phoneticFirstName, setPhoneticFirstName] = useState('');
  const [phoneticMiddleName, setPhoneticMiddleName] = useState('');
  const [phoneticLastName, setPhoneticLastName] = useState('');
  const [img, setImg] = useState();
  const [nickname, setNickname] = useState('');
  const [fileAs, setFileAs] = useState('');
  const [company, setCompany] = useState('');
  const [department, setDepartment] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneLabel, setPhoneLabel] = useState('Mobile');
  const [email, setEmail] = useState('');
  const [emailLabel, setEmailLabel] = useState('Home');
  const [address, setAddress] = useState('');
  const [addressLabel, setAddressLabel] = useState('Home');
  const [website, setWebsite] = useState('');
  const [date, setDate] = useState('');
  const [dateLabel, setDateLabel] = useState('Birthday');
  const [relationship, setRelationship] = useState('');
  const [relationshipLabel, setRelationshipLabel] = useState('Assistant');

  const onSubmit = (e) => {
    e.preventDefault();
    addContact({
      namePrefix,
      firstName,
      middleName,
      lastName,
      nameSuffix,
      phoneticFirstName,
      phoneticMiddleName,
      phoneticLastName,
      nickname,
      fileAs,
      company: { 
        companyName: company, 
        department: department, 
        title: title 
      },
      phone: {
        phoneNo: phone,
        label: phoneLabel,
      },
      email: {
        address: email,
        label: emailLabel,
      },
      address: {
        name: address,
        label: addressLabel,
      },
      website,
      date: {
        title: date,
        label: dateLabel,
      },
      relationship: {
        title: relationship,
        label: relationshipLabel,
      },
    });

    setImg();
    setNamePrefix('')
    setFirstName('')
    setMiddleName('')
    setLastName('')
    setNameSuffix('')
    setPhoneticFirstName('')
    setPhoneticMiddleName('')
    setPhoneticLastName('')
    setNickname('');
    setFileAs('');
    setCompany('');
    setDepartment('');
    setTitle('');
    setPhone('');
    setPhoneLabel('Mobile');
    setEmail('');
    setEmailLabel('Home');
    setAddress('');
    setAddressLabel('Home');
    setWebsite('');
    setDate('');
    setDateLabel('Birthday');
    setRelationship('');
    setRelationshipLabel('Assistant');
  };

  return (
    <form onSubmit={onSubmit} id="add-contact">
      {/* add photo input */}
      <div className="image-input-div">
        <IconContext.Provider value={addPhoto}>
          <label htmlFor="image" className="img-lab">
            <MdOutlineAddAPhoto />
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="file"
              name="image"
              className="img-input"
              accept="image/png, image/jpeg"
            />
          </label>
        </IconContext.Provider>
      </div>

      {/* add name input */}
      <div className="username">
        <div className="form-input">
          <label htmlFor="name" className="label-icon">
            <FaRegUser />
          </label>
          <div className="right-half">
            <div>
              <Inputs
                value={namePrefix}
                onChange={(e) => setNamePrefix(e.target.value)}
                placeholder="Name prefix"
                id="Name-prefix"
              />
              <Inputs
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                id="First-name"
              />
              <Inputs
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Middle name"
                id="Middle-name"
              />
              <Inputs
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                id="Last-name"
              />
              <Inputs
                onChange={(e) => setNameSuffix(e.target.value)}
                value={nameSuffix}
                placeholder="Name suffix"
                id="Name-suffix"
              />
            </div>
            <div className="additional-input">
              <Inputs
                value={phoneticFirstName}
                onChange={(e) => setPhoneticFirstName(e.target.value)}
                placeholder="Phonetic first name"
                id="Phonetic-first-name"
              />
              <Inputs
                value={phoneticMiddleName}
                onChange={(e) => setPhoneticMiddleName(e.target.value)}
                placeholder="Phonetic middle name"
                id="Phonetic-middle-name"
              />
              <Inputs
                value={phoneticLastName}
                onChange={(e) => setPhoneticLastName(e.target.value)}
                placeholder="Phonetic last name"
                id="Phonetic-last-name"
              />
              <Inputs
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Nickname"
                id="Nickname"
              />
              <Inputs
                value={fileAs}
                onChange={(e) => setFileAs(e.target.value)}
                placeholder="File as"
                id="File-as"
              />
            </div>
          </div>
          <div id="more-name-option">
            <AiOutlineDown />
          </div>
        </div>
      </div>

      {/* add company input */}
      <div className="form-input">
        <label htmlFor="phone" className="label-icon">
          <BsBuilding />
        </label>
        <div className="right-half">
          <Inputs
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            id="Company"
          />
          <Inputs
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Department"
            id="Department"
          />
          <Inputs
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            id="Title"
          />
        </div>
      </div>

      {/* add phone input */}
      <div className="form-input">
        <label htmlFor="phone" className="label-icon">
          <MdOutlineLocalPhone />
        </label>
        <div className="right-half">
          <Inputs
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            id="Phone"
          />

          <fieldset className="group-select-fieldset">
            <legend>Label</legend>
            <select
              name=""
              id="phone-no-type"
              value={phoneLabel}
              onChange={(e) => setPhoneLabel(e.target.value)}
            >
              <option value="No Label">No Label</option>
              <option value="Mobile">Mobile</option>
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
        <label htmlFor="email" className="label-icon">
          <AiOutlineMail />
        </label>
        <div className="right-half">
          <Inputs
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            id="Email"
          />

          <fieldset className="group-select-fieldset">
            <legend>Label</legend>
            <select
              name=""
              id="email-type"
              value={emailLabel}
              onChange={(e) => setEmailLabel(e.target.value)}
            >
              <option value="No Label">No Label</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
              <option value="Custom">Custom</option>
            </select>
          </fieldset>
        </div>
      </div>

      {/* add address input */}
      <div className="form-input">
        <label htmlFor="address" className="label-icon">
          <RiMapPin2Line />
        </label>
        <div className="right-half">
          <Inputs
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            id="Address"
          />
          <fieldset className="group-select-fieldset">
            <legend>Label</legend>
            <select
              name=""
              id="address-type"
              value={addressLabel}
              onChange={(e) => setAddressLabel(e.target.value)}
            >
              <option value="No Label">No Label</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
              <option value="Custom">Custom</option>
            </select>
          </fieldset>
        </div>
      </div>

      {/* add website input */}
      <div className="form-input">
        <label htmlFor="phone" className="label-icon">
          <MdOutlineLink />
        </label>
        <div className="right-half">
          <Inputs
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Website"
            id="Website"
          />
        </div>
      </div>

      {/* add date input */}
      <div className="form-input">
        <label htmlFor="significant-date" className="label-icon">
          <IoMdCalendar />
        </label>
        <div className="right-half">
          <Inputs
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            id="Date"
          />

          <fieldset className="group-select-fieldset">
            <legend>Label</legend>
            <select
              name=""
              id="significant-date-type"
              value={dateLabel}
              onChange={(e) => setDateLabel(e.target.value)}
            >
              <option value="No Label">No Label</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
              <option value="Custom">Custom</option>
            </select>
          </fieldset>
        </div>
      </div>

      {/* add relationship input */}
      <div className="form-input">
        <label htmlFor="relationship" className="label-icon">
          <MdOutlineGroupWork />
        </label>
        <div className="right-half">
          <Inputs
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            placeholder="Relationship"
            id="Relationship"
          />
          <fieldset className="group-select-fieldset">
            <legend>Label</legend>
            <select
              name=""
              id="relationship-type"
              value={relationshipLabel}
              onChange={(e) => setRelationshipLabel(e.target.value)}
            >
              <option value="No Label">No Label</option>
              <option value="Assistant">Assistant</option>
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

      <label htmlFor="save">
        <input id="save" type="submit" />
        Save
      </label>
    </form>
  );
};

// font styles.......
export default AddContact;

const addPhoto = {
  style: {
    fontSize: '20px',
    color: 'white',
    marginTop: '11px',
    marginLeft: '2px',
    transform: 'scaleX(-1)',
  },
};
