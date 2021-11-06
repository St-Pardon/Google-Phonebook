import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineMail, AiOutlineDown } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { BsBuilding, BsCameraVideo } from 'react-icons/bs';
import {
  MdOutlineLocalPhone,
  MdOutlineAddAPhoto,
  MdOutlineLink,
  MdOutlineGroupWork,
  MdOutlineMessage,
} from 'react-icons/md';
import { RiMapPin2Line } from 'react-icons/ri';
import { IoMdCalendar } from 'react-icons/io';

const ContactDetails = ({ contact }) => {
  return (
    <div className="contact-details">
      <div className="avata">
        <img
          src={
            contact.img
              ? contact.img
              : 'https://previews.123rf.com/images/apoev/apoev1812/apoev181200018/113634857-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background.jpg'
          }
        />
      </div>
      <div className="details">
        <div className="details-intro">
          <h2 className="contact-name">
            {contact.fileAs === ''
              ? contact.lastName + ' ' + contact.firstName
              : contact.fileAs}
          </h2>
          {/* <p>{contact.company.companyName}</p> */}
        </div>
        <div className="dial-icons">
          <div>
            <div>
              <MdOutlineLocalPhone />
            </div>
            <p>Call</p>
          </div>
          <div>
            <div>
              <MdOutlineMessage />
            </div>
            <p>Text</p>
          </div>
          <div>
            <div>
              <BsCameraVideo />
            </div>
            <p>Video</p>
          </div>
        </div>
        <div className="dial-numbers">
          <div className="dail-call-icon">
            <MdOutlineLocalPhone />
          </div>
          <div className="numbers-display">
            <div>
              {/* <p>{contact.phone.phoneNo}</p>
              <p>{contact.phone.label}</p> */}
            </div>
            <div className="dail-options-icon">
              <div>
                <MdOutlineMessage />
              </div>
              <div>
                <BsCameraVideo />
              </div>
            </div>
          </div>
        </div>
        <div className="other-details">
          <h5>About Rosemary</h5>
          <div className="other-info-container">
            <div className="other-info">
              <div className="other-info-icon">
                <BsBuilding />
              </div>
              <div>{/* <p>{contact.company.companyName}</p> */}</div>
            </div>
            <div className="other-info">
              <div className="other-info-icon">
                <IoMdCalendar />
              </div>
              <div>
                {/* <p>{contact.date.title}</p>
                <p>{contact.date.label}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
