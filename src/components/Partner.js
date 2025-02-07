import React from "react";
import { calculators, mamoyo, magetsi, solvaxion, wildrose } from "../assets";

const teamlogo =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1a71a740-072f-42ff-9509-596f1b44d79f/team_logo.png";
const Karandalogo =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/f10381d2-45d5-4db0-a1cc-85664ada753a/logowhite.png?format=1500w";

function Partner() {
  return (
    <div className="bodyP mb-0 bg-gray-50 shadow">
      {/* PARTNERS TODO: */}
      <div class="inline-flex w-full flex-nowrap overflow-hidden bg-white [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul class="brands-wrapper">
          <li>
            <img src={solvaxion} alt="solavation" width="250" height="100" />
          </li>
          <li>
            <a href="https://magetsi.co.zw/">
              <img src={magetsi} alt="magetsi" width="250" height="100" />
            </a>
          </li>
          <li>
            <img src={wildrose} alt="wildrose" width="250" height="100" />
          </li>
          <li>
            <img src={mamoyo} alt="mamoyo" width="250" height="100" />
          </li>
          <li>
            <img src={calculators} alt="calculators" width="250" height="100" />
          </li>
          <li>
            <img src={teamlogo} alt="teamlogo" width="250" height="100" />
          </li>
          <li>
            <img
              className="bg-gray-600 p-4 rounded-lg"
              src={Karandalogo}
              alt="karanda"
              width="250"
              height="100"
            />
          </li>
        </ul>
        <ul class="brands-wrapper" aria-hidden="true">
          <li>
            <img src={solvaxion} alt="solvaxion" width="250" height="100" />
          </li>
          <li>
            <a href="https://magetsi.co.zw/">
              <img src={magetsi} alt="magetsi" width="250" height="100" />
            </a>
          </li>
          <li>
            <img src={wildrose} alt="wildrose" width="250" height="100" />
          </li>
          <li>
            <img src={mamoyo} alt="mamoyo" width="250" height="100" />
          </li>
          <li>
            <img src={calculators} alt="calculators" width="250" height="100" />
          </li>
          <li>
            <img src={teamlogo} alt="teamlogo" width="250" height="100" />
          </li>
          <li>
            <img
              className="bg-gray-900"
              src={Karandalogo}
              alt="karanda"
              width="250"
              height="100"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Partner;
