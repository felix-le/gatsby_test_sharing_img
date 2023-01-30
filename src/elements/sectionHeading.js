import React from 'react';

function SectionHeading({ point, outline, title, addClassSectionHeading }) {
  return (
    <div className={`section-heading ${addClassSectionHeading}`}>
      <p className='point_heading'>
        {point}
        <span>{outline}</span>
      </p>

      <h3
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
    </div>
  );
}

export default SectionHeading;
