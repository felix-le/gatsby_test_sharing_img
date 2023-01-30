import React from 'react';

const contactAddresses = [
  {
    id: 1,
    address: 'Barrie',
    number: '300-70 Dunlop St. East',
    street: 'Barrie, ON L4M 1A4',
    send_to: 'barrie@element6.io',
    phoneNumber: '+7055037066',
    phoneDisplay: '+1.705.503.7066',
  },
  {
    id: 2,
    address: 'Toronto',
    number: '1-164 Buttermill Ave.,',
    street: 'Vaughan, ON L4K 3X6',
    send_to: 'toronto@element6.io',
    phoneNumber: '+14169913767',
    phoneDisplay: '+1.416.991.3767',
  },
  {
    id: 3,
    address: 'Midland',
    number: '531 King Street,Unit B,',
    street: 'Midland, ON L4R 3N6',
    send_to: 'pros@element6.io',
    phoneNumber: '+7055277767',
    phoneDisplay: '+1.705.527.7767',
  },
];

const officiallAddress = () => {
  return (
    <>
      {!!contactAddresses && (
        <div className='relative w-full' id='contact'>
          <div className='mx-auto w-full max-w-full xl:max-w-[1320px] '>
            <div className='address_wrapper flex w-full flex-col items-center  justify-center xl:flex-row '>
              {contactAddresses.map((item) => {
                const {
                  id,
                  address,
                  number,
                  street,
                  send_to,
                  phoneNumber,
                  phoneDisplay,
                } = item;
                return (
                  <div
                    className='address_item w-full translate-y-0 xl:w-1/3 xl:translate-y-[-120px]'
                    key={id}
                  >
                    <p className='text-center before:content-none xl:text-left xl:before:content-[""]'>
                      {id}. <span className='pl-0 xl:pl-[80px]'>{address}</span>
                    </p>
                    <h6 className='text-center xl:text-left'>{number}</h6>
                    <h6 className='text-center xl:text-left'>{street}</h6>
                    <h6 className='mt-2 text-center xl:text-left'>
                      <a
                        href={`mailto:${send_to}`}
                        className='text-center text-primary hover:underline xl:text-left'
                      >
                        {send_to}
                      </a>
                    </h6>
                    <h6 className='mt-2 text-center xl:text-left'>
                      <a
                        href={`tel:${phoneNumber}`}
                        className='text-center text-primary hover:underline xl:text-left'
                      >
                        {phoneDisplay}
                      </a>
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default officiallAddress;
