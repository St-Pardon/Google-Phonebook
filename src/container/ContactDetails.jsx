import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { BsBuilding, BsCameraVideo, BsDot } from 'react-icons/bs';
import {
  MdOutlineLocalPhone,
  MdOutlineLink,
  MdOutlineGroupWork,
  MdOutlineMessage,
  MdOutlineDirections,
} from 'react-icons/md';
import { RiMapPin2Line } from 'react-icons/ri';
import { IoMdCalendar } from 'react-icons/io';

const ContactDetails = ({ contact, thumbnail }) => {
  return (
    <div className="contact-details">
      {contact.img !== '' ? (
        <div className="avarta">
          <img src={contact.img} />
        </div>
      ) : (
        <div className="no-avarta">
          <p style={{ backgroundColor: thumbnail }}>
            {contact.fileAs === ''
              ? contact.lastName[0] || contact.firstName[0]
              : contact.fileAs[0]}
          </p>
        </div>
      )}

      <div className="details">
        <div className="details-intro">
          <h2 className="contact-name">
            {contact.fileAs === ''
              ? `${contact.lastName} ${contact.middleName} ${contact.firstName}`
              : contact.fileAs}
          </h2>
          <div className="brief-about">
            {contact.company.title !== '' && (
              <p>{contact.company.title + ' '}</p>
            )}
            {contact.company.title !== '' && <BsDot />}
            {contact.company.department !== '' && (
              <p>{contact.company.department}</p>
            )}
            {contact.company.department !== '' && <BsDot />}
            {contact.company.companyName !== '' && (
              <p>{contact.company.companyName}</p>
            )}
          </div>
        </div>
        <div className="dial-icons">
          <a href={`tel:${contact.phone.phoneNo}`}>
            <div>
              <div>
                <MdOutlineLocalPhone />
              </div>
              <p>Call</p>
            </div>
          </a>
          <a href={`sms:${contact.phone.phoneNo}?body=`}>
            <div>
              <div>
                <MdOutlineMessage />
              </div>
              <p>Text</p>
            </div>
          </a>
          <a href={`facetime://${contact.phone.phoneNo}`}>
            <div>
              <div>
                <BsCameraVideo />
              </div>
              <p>Video</p>
            </div>
          </a>
          {contact.email.address !== '' && (
            <a href={`mailto:${contact.email.address}`}>
              <div>
                <div>
                  <AiOutlineMail />
                </div>
                <p>Email</p>
              </div>
            </a>
          )}
          {contact.address.name !== '' && (
            <div>
              <div>
                <MdOutlineDirections />
              </div>
              <p>Directions</p>
            </div>
          )}
        </div>
        <div className="contact-info">
          <div className="dial-numbers">
            <a href={`tel:${contact.phone.phoneNo}`}>
              <div className="dail-call-icon">
                <MdOutlineLocalPhone />
              </div>
            </a>
            <div className="numbers-display">
              <a href={`tel:${contact.phone.phoneNo}`}>
                <div>
                  <p>{contact.phone.phoneNo}</p>
                  <p>{contact.phone.label}</p>
                </div>
              </a>
              <div className="dail-options-icon">
                <a href={`sms:${contact.phone.phoneNo}?body=`}>
                  <div>
                    <MdOutlineMessage />
                  </div>
                </a>
                <a href={`facetime://${contact.phone.phoneNo}`}>
                  <div>
                    <BsCameraVideo />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {contact.email.address !== '' && (
            <a href={`mailto:${contact.email.address}`}>
              <div className="dial-numbers">
                <div className="dail-call-icon">
                  <AiOutlineMail />
                </div>
                <div className="numbers-display">
                  <div>
                    <p>{contact.email.address}</p>
                    <p>{contact.email.label}</p>
                  </div>
                  <div className="dail-options-icon"></div>
                </div>
              </div>
            </a>
          )}
          {contact.address.name !== '' && (
            <div className="dial-numbers">
              <div className="dail-call-icon">
                <RiMapPin2Line />
              </div>
              <div className="numbers-display">
                <div>
                  <p>{contact.address.name}</p>
                  <p>{contact.address.label}</p>
                </div>
                <div className="dail-options-icon">
                  <div>
                    <MdOutlineDirections />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {contact.company.companyName !== '' ||
        contact.nickname !== '' ||
        contact.relationship.title !== '' ||
        contact.date.title !== '' ? (
          <div className="other-details">
            <h5>About {contact.firstName}</h5>
            <div className="other-info-container">
              {contact.nickname !== '' && (
                <div className="other-info">
                  <div className="other-info-icon">
                    <FaRegUser />
                  </div>
                  <div>
                    <p>{contact.nickname}</p>
                    <p>Nickname</p>
                  </div>
                </div>
              )}

              {contact.company.companyName !== '' && (
                <div className="other-info">
                  <div className="other-info-icon">
                    <BsBuilding />
                  </div>
                  <div>
                    <div className="brief-about">
                      {contact.company.title !== '' && (
                        <p>{contact.company.title + ' '}</p>
                      )}
                      {contact.company.title !== '' && <BsDot />}
                      {contact.company.department !== '' && (
                        <p>{contact.company.department}</p>
                      )}
                      {contact.company.department !== '' && <BsDot />}
                      {contact.company.companyName !== '' && (
                        <p>{contact.company.companyName}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {contact.website !== '' && (
                <a href={`https://${contact.website}`}>
                  <div className="other-info">
                    <div className="other-info-icon">
                      <MdOutlineLink />
                    </div>
                    <div>
                      <p>{contact.website}</p>
                    </div>
                  </div>
                </a>
              )}

              {contact.date.title !== '' && (
                <div className="other-info">
                  <div className="other-info-icon">
                    <IoMdCalendar />
                  </div>
                  <div>
                    <p>{contact.date.title}</p>
                    <p>{contact.date.label}</p>
                  </div>
                </div>
              )}

              {contact.relationship.title !== '' && (
                <div className="other-info">
                  <div className="other-info-icon">
                    <MdOutlineGroupWork />
                  </div>
                  <div>
                    <p>{contact.relationship.title}</p>
                    <p>{contact.relationship.label}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ContactDetails;
