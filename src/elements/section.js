import React, { forwardRef } from 'react';
import SectionHeading from './sectionHeading';

const section = forwardRef(
  (
    {
      point,
      outline,
      title,
      addClassSectionHeading,
      sectionAddClasses,
      sectionName,
      children,
      isHeading,
      fluid,
    },
    ref
  ) => {
    return (
      <section className={sectionAddClasses} id={sectionName} ref={ref}>
        {fluid ? (
          children
        ) : (
          <div className='container'>
            {isHeading && (
              <div className='row'>
                <SectionHeading
                  point={point}
                  outline={outline}
                  title={title}
                  addClassSectionHeading={addClassSectionHeading}
                />
              </div>
            )}
            {children}
          </div>
        )}
      </section>
    );
  }
);

export default section;
