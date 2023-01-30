import React from 'react';
import GoogleMap from './googleMap';

export default function Map() {
  return (
    <div className='section back-white' id='contact'>
      <div id='cd-google-map'>
        <GoogleMap />
      </div>
      <div className='section'>
        <div className='container'>
          <div>
            <div className='contact-det'>
              <p>
                1. <span>Barrie</span>
              </p>
              <h6>300-70 Dunlop St. East</h6>
              <h6>Barrie, ON L4M 1A4</h6>
              <h6>
                <a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#98;&#97;&#114;&#114;&#105;&#101;&#64;&#101;&#108;&#101;&#109;&#101;&#110;&#116;&#54;&#46;&#105;&#111;'>
                  &#98;&#97;&#114;&#114;&#105;&#101;&#64;&#101;&#108;&#101;&#109;&#101;&#110;&#116;&#54;&#46;&#105;&#111;
                </a>
              </h6>
              <h6>
                <a href='tel:7055037066'>+705.503.7066</a>
              </h6>
            </div>

            <div className='contact-det'>
              <p>
                3. <span>Toronto</span>
              </p>
              <h6>1-164 Buttermill Ave.,</h6>
              <h6>Vaughan, ON L4K 3X6</h6>
              <h6>
                <a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#111;&#114;&#111;&#110;&#116;&#111;&#64;&#101;&#108;&#101;&#109;&#101;&#110;&#116;&#54;&#46;&#105;&#111;'>
                  &#116;&#111;&#114;&#111;&#110;&#116;&#111;&#64;&#101;&#108;&#101;&#109;&#101;&#110;&#116;&#54;&#46;&#105;&#111;
                </a>
              </h6>
              <h6>
                <a href='tel:+14169913767'>+1.416.991.3767</a>
              </h6>
            </div>

            <div className='contact-det'>
              <p>
                3. <span>Ottawa</span>
              </p>
              <h6>141 Laurier Ave. West,</h6>
              <h6>Ottawa, ON K1P 5J3</h6>
              <h6>
                <a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#111;&#116;&#116;&#97;&#119;&#97;&#64;&#101;&#108;&#101;&#109;&#101;&#110;&#116;&#54;&#46;&#105;&#111;'>
                  &#111;&#116;&#116;&#97;&#119;&#97;&#64;&#101;&#108;&#101;&#109;&#101;&#110;&#116;&#54;&#46;&#105;&#111;
                </a>
              </h6>
              <h6>
                <a href='tel:+16135677587'>+1.613.567.7587</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
