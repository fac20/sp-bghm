import React from "react";
import styled from "styled-components";

const Svg = styled.svg.attrs({
  version: "1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "962",
  height: "744",
})`
  /* NOTE: Can change width within the backticks using media queries */
  /* width: 900px; 
  height: 900px; */
  .clicked {
    fill: #fc8c03;
  }
  &:hover {
    fill: #000;
  }
`;

export default function Map({ userLocation, setUserLocation }) {
  function locateUser(event) {
    let newLocation = event.target.getAttribute("borough");
    setUserLocation(newLocation);
    window.localStorage.setItem("location", newLocation);
  }

  return (
    <Svg>
      <g>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M729.646 121.096l35.825 1.462 65.8-15.353 40.941 31.437-4.386 16.085 10.235 3.655 25.589 64.338 29.244.73 24.858 38.75-77.497 20.47-2.925 24.127-17.547-13.89-45.328 88.463-96.507-7.31 11.698-252.964z"
          className={"Havering" === userLocation ? "clicked" : null}
          onClick={locateUser}
          borough="Havering"
          alt="Havering"
        ></path>

        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          d="M747.924 320.688l27.05 15.353 9.505 29.245 9.505 7.31 28.513-4.386 9.504 8.774-13.89 32.9-57.027 67.993 5.118 48.253-97.969-8.774-10.235-204.71 89.926 8.042z"
          borough="Bexley"
          className={"Bexley" === userLocation ? "clicked" : null}
          onClick={locateUser}
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          d="M603.896 118.171l27.782 24.858 46.79 16.815 5.85-17.546 46.06-20.471 16.084 24.857v25.59l-30.707 114.783-76.035 10.236-91.389-82.615 8.774-73.842 46.79-22.665z"
          borough="Redbridge"
          className={"Redbridge" === userLocation ? "clicked" : null}
          onClick={locateUser}
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          borough="Enfield"
          className={"Enfield" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M367.016 49.447l21.203-28.513 82.615-12.43 87.002 16.816 5.849 51.91 13.16 9.504-27.783 126.481L309.99 189.09l57.026-139.642z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Waltham Forest"
          className={"Waltham Forest" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M519.818 162.038l13.16-4.387 2.924-7.311-1.462-2.924 35.093-65.8 24.127 12.429 10.967 24.126-13.891 15.353 11.697 16.085-10.966 27.782 19.009 97.237-115.516 1.463-21.202-90.658 46.06-23.395z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          borough="Sutton"
          className={"Sutton" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M302.679 552.45l8.042 25.588v25.59l9.504-2.925 21.203 37.286-11.698 18.278 17.546 12.429 19.74-22.665 57.027 43.867 89.926-118.44-108.935-65.8L302.68 552.45z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Kingston upon Thames"
          className={"Kingston upon Thames" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M332.654 548.794l-23.395 26.32-11.698 3.655-31.438 21.934-21.202 54.102-22.664 17.546-5.849-4.386-4.387-38.018 19.01-38.749 8.773-9.504-10.236-22.664h-7.311l-26.32-30.707 29.244-71.649 73.842 7.311 33.631 84.809z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Bromley"
          className={"Bromley" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M656.17 452.288l54.833 52.64 18.278-4.387 36.19 13.525 3.655 22.3-10.967 6.945-14.622 80.422-15.353 1.096-4.021 25.224-33.266 24.857 9.505 35.459-54.468 11.332-16.084-19.374-19.374 19.374-24.127-79.69-138.91-177.294 208.73-12.43z"
        ></path>
        <path
          fill="#74c69d"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Croydon"
          className={"Croydon" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M496.351 495.824l27.65 40.464 4.72-2.698 18.884 24.953v18.883l10.79-6.744 18.208 40.463 8.768 8.767 8.092 40.464-26.975-14.837-28.325 15.511-.674 10.79-41.812 10.79-1.35 10.79-35.067 46.534-21.58-16.86-20.233-6.744-5.395-34.394 16.186-7.418-4.047-32.37 35.743-13.489-37.766-127.46 53.951-20.905 20.232 15.51z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Barking and Dagenham"
          className={"Barking and Dagenham" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M652.745 272.548l25.021-13.608 11.414 5.268 35.995-38.63-2.634-34.239 24.582-28.094 2.195 23.266-1.317 23.704-5.267 7.901 18.875 11.853 22.388-3.512 10.096 21.948-26.777 44.336-6.585 35.117-31.166-8.779-45.756 12.454-31.064-58.985z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Newham"
          className={"Newham" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M556.172 256.307l47.848-9.219 27.216 1.756-4.39-13.608 7.463-1.317 20.192 17.12 9.657 43.458 22.388 8.78 17.12 32.922-72.43 39.507-99.646-67.162 24.582-52.237z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Greenwich"
          className={"Greenwich" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M616.75 460.427l7.462-7.463 33.362 33.362 18.437-15.364-4.39-5.268 12.291-13.608-.878-21.948-7.462-5.707 1.316-17.558 18.437-12.291 11.852.439 12.291-10.975-1.756-61.455-32.922 5.706-18.437 21.949-57.944 5.706-32.922-26.338-27.655 50.92 68.918 79.893z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Towerhamlets"
          className={"Towerhamlets" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M561.508 268.161l-.93 22.66 9.622 13.036 1.552 13.036 11.795 5.277 6.518 18.934-6.518.31-6.519 9.623 4.035 14.278-3.414 11.485-86.29 1.552-4.035-95.602 74.184-14.589z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Hackney"
          className={"Hackney" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M493.531 321.55l5.588-27.936 31.04-4.967 23.28-18.003 7.449-2.483.31-12.726-13.037-13.347-18.623-1.552-37.248-40.662-56.182 8.38 14.589 92.188 42.834 21.107z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Islington"
          className={"Islington" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M446.43 218.116l50.482 51.36-10.536 3.072-2.194 11.414-9.658 10.096 16.242 25.46-62.333 20.193-21.51-121.156 39.507-.439z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="City of London"
          className={"City of London" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M455.21 323.03l17.997-10.535 9.658 6.145 6.584-3.95 5.268-.44 5.706 15.803-10.535 17.998-31.606-2.634-3.072-22.387z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Merton"
          className={"Merton" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M300.693 477.108l-3.073 13.169 12.291 40.385-5.706 14.925 36.873 29.41 12.291-14.486 19.754 3.512 17.12-14.486L401.655 557l35.117-3.512 7.901-16.68-18.875-79.893-94.817-3.512-30.289 23.705z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Lewisham"
          className={"Lewisham" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M493.4 481.936l37.312 9.657 17.998-5.706 15.364 8.34-4.829 6.585 14.047 7.901 40.824-29.85 11.852 8.78 4.39-16.681-10.974-7.462.439-7.902-24.583-32.484.44-13.169 9.657-11.413-36.874 3.951-10.974-24.582-27.216-21.51-22.826 14.925-14.047 110.62z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Southwark"
          className={"Southwark" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M462.672 340.589l15.364-1.756 14.486 3.511 18.876 8.78 21.509-15.364 14.486 8.34v23.266l-22.387 3.511.439 32.923 11.413 30.289-7.024 8.34-11.413-.878-9.218 29.411-8.78 6.146-3.511 19.753-48.287-67.601 14.047-88.671z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Haringey"
          className={"Haringey" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M360.06 153.935l158.614-.31 9.312 5.276-9.002 22.66-3.104 20.175-9.001 13.037-33.523 4.345-10.243 16.451-16.762-16.45-79.462 21.727-6.828-86.911z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Lambeth"
          className={"Lambeth" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M423.071 499.097l-7.139 10.864 25.453 6.828 16.14-23.59 39.42 4.346-28.556-57.734 13.037-18.314-3.725-12.416-17.382-27.004 6.518-14.278-7.45-7.45 4.036-19.865-37.868-4.346-20.176 77.91 17.692 85.049z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Wandsworth"
          className={"Wandsworth" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M257.94 410.323l42.835 67.667 29.177-10.243 13.658 3.414 23.9-10.554 1.863 19.555 7.139-2.483 1.552 12.727 25.763 9.311 2.172-3.414 17.383 4.035 6.828-6.829.932-32.902-17.072-42.524 18.934-17.693 3.725-20.175-76.979-18.624-101.81 48.732z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Westminster"
          className={"Westminster" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M383.706 378.007l53.067 2.967 10.974-41.263 12.89.181-2.326-19.844-50.613-45.201-89.446-.104 65.454 103.264z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Camden"
          className={"Camden" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M372.245 222.945l47.847 3.073 1.756 24.582 23.704 32.923 13.17 38.19-18.437 7.023-20.632-13.169-11.413-27.216-35.995-2.195-12.291 7.463-38.63-47.848 50.92-22.826z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Barnet"
          className={"Barnet" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M233.53 114.081l49.604-11.852 9.658-28.094 18.875-.878 32.045-19.753 25.899-5.268v14.047l32.484 8.78 2.633 18.436 26.777 27.216-18.436 28.972 6.145 10.096-7.462 21.948-8.78-11.413-5.706 11.413.439 19.315-10.535 21.07-33.362 34.679h-47.847L233.53 114.08z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Kensington and Chelsea"
          className={
            "Kensington and Chelsea" === userLocation ? "clicked" : null
          }
          onClick={locateUser}
          d="M338.005 290.985l1.756 20.193 16.242 4.39 22.826 42.58h14.486l9.658-9.22 6.584 30.729L352.93 403.8l-40.824-86.916 25.9-25.899z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Hammersmith and Fulham"
          className={
            "Hammersmith and Fulham" === userLocation ? "clicked" : null
          }
          onClick={locateUser}
          d="M334.932 405.556l19.754 17.12 23.265-3.951 3.073-21.51-43.458-43.457-10.974-32.923 3.95-38.19-69.356 3.95 43.458 110.62 30.288 8.34z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Brent"
          className={"Brent" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M267.331 161.929l29.85 41.263-5.267 9.218 7.023 21.07 3.95-7.023 11.853 2.634 49.164 61.894-4.39 11.852-17.12-6.145-4.828 7.023-38.629-3.512-24.143 16.681-91.744-27.216 11.413-112.376 72.868-15.363z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Harrow"
          className={"Harrow" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M151.064 260.794l32.476-7.873 18.698 7.873 7.873-22.635 1.21-19.789 23.18-16.624 23.832 1.968-7.873-16.73 26.572-11.81-44.286-62L217 105.303l-14.762 17.714-85.619 34.444 34.445 103.334z"
          opacity="1"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Richmond upon Thames"
          className={"Richmond upon Thames" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M139.153 499.056l7.901 23.704 31.167 3.512 40.385 31.606 13.169-6.585 7.463-50.481-10.097-13.608 8.78-7.902 27.655 19.315 45.652-35.556-18.436-24.144 5.267-17.12 21.51.44 2.194-14.047 14.047-1.756-12.73-25.021-23.704-8.78-155.395 18.437-4.828 107.986z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Hounslow"
          className={"Hounslow" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M64.967 442.868l7.902 34.678 23.265 14.925 15.364-5.267 15.364 14.925 24.143.439-3.512-15.803 21.07-18.437-23.265-9.657 8.78-18.437 15.364-4.39 38.19 2.634 41.702-53.554h15.364l14.925 22.388 17.558-1.317 1.756-16.681 9.657-9.218v-15.803l-31.166-21.07-202.803 2.633-9.658 97.012z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Hillingdon"
          className={"Hillingdon" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M10.708 417.482l67.239 31.4 35.974-36.533-8.858-17.714 9.842-33.46 10.825-2.953 27.556-53.143-48.223-12.793 24.604-10.826-.984-7.873 22.634-11.81-36.412-108.253-44.286-8.857-11.81 10.825-43.301-30.508-2.952 55.111 26.571 82.667-17.7 30.402 11.81 59.607-22.53 64.711z"
        ></path>
        <path
          fill="#74C69D"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.5"
          borough="Ealing"
          className={"Ealing" === userLocation ? "clicked" : null}
          onClick={locateUser}
          d="M125.984 359.025l22.387 7.024 7.463-3.512 11.413 10.535 18.436-12.73 7.902 7.463 46.091-2.195 9.658-9.658 12.29-.439 13.609 10.536 17.559-.878 3.511-11.852 7.024-6.585-5.268-32.484 5.268-15.363-14.925-7.463-10.974 12.73h-16.242V289.23l-20.632 10.097-11.413-25.022-27.216-14.047-17.997-7.901-32.045 8.34-21.949 12.73-.438 7.024-23.705 12.291 46.53 11.852-26.337 54.432z"
        ></path>
        <path
          fill="none"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#00000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="6.2"
          d="M17.542 126.403l41.753 32.01 13.918-12.525 45.928 11.134 80.722-30.62 16.702-20.876 16.7 8.35 50.104-12.525 8.35-27.835 22.27-1.392 30.618-19.485 23.66-4.175 20.876-29.227 80.723-11.134 89.073 16.7 4.175 52.888 30.619 16.701 11.134 23.66 27.835 25.052 47.32 16.701 4.176-18.093 44.536-19.484h38.97l64.021-13.918 41.753 32.01-6.959 16.702 12.526 2.783 25.052 64.021 27.835-1.391 26.444 40.36-77.895 21.388-1.968 26.571-18.698-17.714-38.381 76.762 8.857 7.873-13.778 35.429-56.095 64.952 8.857 59.048-10.825 5.904-14.762 81.683-16.73.984-1.969 24.603-34.444 25.588 10.825 36.412-55.11 10.826-15.747-19.683-20.666 21.65-16.73-62-27.556-17.713-27.556 16.73-.984 9.841-41.333 11.81-.984 11.81-36.413 46.253-23.619-19.683-18.698-6.888-3.937-34.445-44.286-36.413-19.682 25.588-19.683-12.794 12.794-19.682-21.65-36.413-9.842 3.936v-31.492l-13.778 4.921-27.555 21.65L245.72 655.2l-23.62 17.714-6.634-6.727-3.207-34.606 18.699-40.35 8.857-8.857-10.826-22.634-8.857-.985-41.333-32.476-32.476-2.952-5.905-19.683h-12.794l-14.762-16.73-15.746 5.905-23.619-12.794-7.873-35.428L9.53 418.024l23.62-64.952-12.794-60.032 18.698-31.492-22.635-84.635 1.124-50.51z"
        ></path>
      </g>
    </Svg>
  );
}
