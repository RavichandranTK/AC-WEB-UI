import heatingSolutionImg from "../../assets/images/hvac/heatingSolution.jpg";
import ventilationImg from "../../assets/images/hvac/ventilation.jpg";
import airConditioningImg from "../../assets/images/hvac/airConditioning.jpg";
import energyManagementImg from "../../assets/images/hvac/energyManagement.png";
import indoorImg from "../../assets/images/hvac/indoor.webp";
import roboticImg from "../../assets/images/hvac/robotic.jpg";
import upgradeImg from "../../assets/images/hvac/upgrade.jpg";
import integrationImg from "../../assets/images/bms/Integration.jpg";
import monitorImg from "../../assets/images/bms/monitor.webp";
import remoteImg from "../../assets/images/bms/remote.jpg";
import reportsImg from "../../assets/images/bms/reports.png";
import energyImg from "../../assets/images/bms/energy.png";

//HVAC Data
export const HVAC_TAB_LIST_ARR = [
  {
    title: "Heating Solutions",
    tabValue: 0,
  },
  {
    title: "Ventilation Systems",
    tabValue: 1,
  },
  {
    title: "Air Conditioning",
    tabValue: 2,
  },
  {
    title: "Energy Auditing",
    tabValue: 3,
  },
  {
    title: "Indoor Air Quality (IQA)",
    tabValue: 4,
  },
  {
    title: "Robotic Duct Cleaning",
    tabValue: 5,
  },
  {
    title: "HVAC System Upgrades",
    tabValue: 6,
  },
];
export const HVAC_TAB_PANEL_CONTENT_ARR = [
  {
    tabValue: 0,
    data: {
      content:
        "Installation, repair, and maintenance of energy-efficient heating systems for homes, offices, and industrial facilities. PowerWise offers web-based controls and performance monitoring for many different heating and cooling technologies.",
      imgSrc: heatingSolutionImg,
      metaData: [
        {
          Heating_and_Cooling_Analytics:
            "Easily know the costs and output of virtually any heating and cooling system. Measure the electrical consumption and the app shows runtimes and electricity costs to operate the mechanical system. See when HVAC units are running. Plus, with an integrated thermostat, see the setpoints and room temperatures. Plus control the schedules.",
        },
        {
          HVAC_Equipment_Runtimes_and_Power_Draw: "Know when equipment is operating. Inspect the power consumption charts and see if HVAC is running after hours or not as expected. The app also tracks the equipment runtimes. Receive alerts when runtimes cross a defined threshold."
        },
        {
          HVAC_Performance_Alerts: "Receive proactive alerts via text or email. Easily manage subscriptions. Plus, identify problems areas with a history of alerts by equipment or location. Economizer failure - compressor continues to run when outdoor temperature is cool. Stage failure - power draw too low for stage called by thermostat. HVAC equipment unable to reach thermostat setpoint"
        },
        {
          Thermostat_Controls: "By adding thermostat controls along with the monitoring, you can easily correlate setpoints, power use, room temperatures, and outdoor temperatures -- all on one chart."
        },
      ],
    },
  },
  {
    tabValue: 1,
    data: {
      content:
        "Design and installation of custom ventilation systems to ensure proper air circulation, indoor air quality, and mold/moisture control.Ventilation is the process of changing or replacing air in any space to control the temperature or remove any combination of moisture, odors, smoke, heat, dust, airborne bacteria, or carbon dioxide, and to replenish oxygen. Ventilation often refers to the intentional delivery of the outside air to the building indoor space. It is one of the most important factors for maintaining acceptable indoor air quality in buildings. Methods for ventilating a building may be divided into mechanical/forced and natural types",
      imgSrc: ventilationImg,
      metaData: [
        {
          Mechanical_or_forced:
            "Mechanical, or forced, ventilation is provided by an air handler (AHU) and used to control indoor air quality. Excess humidity, odors, and contaminants can often be controlled via dilution or replacement with outside air. However, in humid climates more energy is required to remove excess moisture from ventilation air.",
        },
        {
          Passive: "Natural ventilation is the ventilation of a building with outside air without using fans or other mechanical systems. It can be via operable windows, louvers, or trickle vents when spaces are small and the architecture permits. ASHRAE defined Natural ventilation as the flow of air through open windows, doors, grilles, and other planned building envelope penetrations, and as being driven by natural and/or artificially produced pressure differentials."
        },
        {
          Airborne_diseases: "Natural ventilation [21] is a key factor in reducing the spread of airborne illnesses such as tuberculosis, the common cold, influenza, meningitis or COVID-19. Opening doors and windows are good ways to maximize natural ventilation, which would make the risk of airborne contagion much lower than with costly and maintenance-requiring mechanical systems. Old-fashioned clinical areas with high ceilings and large windows provide the greatest protection. Natural ventilation costs little and is maintenance free, and is particularly suited to limited-resource settings and tropical climates, where the burden of TB and institutional TB transmission is highest. In settings where respiratory isolation is difficult and climate permits, windows and doors should be opened to reduce the risk of airborne contagion. Natural ventilation requires little maintenance and is inexpensive"
        },
        {
          Thermostat_Controls: "By adding thermostat controls along with the monitoring, you can easily correlate setpoints, power use, room temperatures, and outdoor temperatures -- all on one chart."
        },
      ],
    },
  },
  {
    tabValue: 2,
    data: {
      content:
        "Expertise in installing and servicing energy-efficient air conditioning systems to keep spaces cool during scorching summers.An air conditioning system, or a standalone air conditioner, provides cooling and/or humidity control for all or part of a building. Air conditioned buildings often have sealed windows, because open windows would work against the system intended to maintain constant indoor air conditions. Outside, fresh air is generally drawn into the system by a vent into a mix air chamber for mixing with the space return air. Then the mixture air enters an indoor or outdoor heat exchanger section where the air is to be cooled down, then be guided to the space creating positive air pressure. The percentage of return air made up of fresh air can usually be manipulated by adjusting the opening of this vent. Typical fresh air intake is about 10% of the total supply air",
      imgSrc: airConditioningImg,
      metaData: [
        {
          Refrigeration_cycle:
            "At the inlet of a compressor, the refrigerant inside the system is in a low pressure, low temperature, gaseous state. The compressor pumps the refrigerant gas up to high pressure and temperature. From there it enters a heat exchanger (sometimes called a condensing coil or condenser) where it loses heat to the outside, cools, and condenses into its liquid phase.",
        },
        {
          Free_cooling: "Free cooling systems can have very high efficiencies, and are sometimes combined with seasonal thermal energy storage so that the cold of winter can be used for summer air conditioning. Common storage mediums are deep aquifers or a natural underground rock mass accessed via a cluster of small-diameter, heat-exchanger-equipped boreholes. Some systems with small storages are hybrids, using free cooling early in the cooling season, and later employing a heat pump to chill the circulation coming from the storage. The heat pump is added-in because the storage acts as a heat sink when the system is in cooling (as opposed to charging) mode, causing the temperature to gradually increase during the cooling season."
        },
        {
          Packaged_split_system: "An alternative to packaged systems is the use of separate indoor and outdoor coils in split systems. Split systems are preferred and widely used worldwide except in North America. In North America, split systems are most often seen in residential applications, but they are gaining popularity in small commercial buildings. Split systems are used where ductwork is not feasible or where the space conditioning efficiency is of prime concern. The benefits of ductless air conditioning systems include easy installation, no ductwork, greater zonal control, flexibility of control, and quiet operation. he use of minisplits can result in energy savings in space conditioning as there are no losses associated with ducting."
        },
        {
          Maintenance: "All modern air conditioning systems, even small window package units, are equipped with internal air filters. These are generally of a lightweight gauze-like material, and must be replaced or washed as conditions warrant. For example, a building in a high dust environment, or a home with furry pets, will need to have the filters changed more often than buildings without these dirt loads. Failure to replace these filters as needed will contribute to a lower heat exchange rate, resulting in wasted energy, shortened equipment life, and higher energy bills; low air flow can result in iced-over evaporator coils, which can completely stop airflow. Additionally, very dirty or plugged filters can cause overheating during a heating cycle, which can result in damage to the system or even fire."
        },
      ],
    },
  },
  {
    tabValue: 3,
    data: {
      content:
        "Conducting energy audits to identify opportunities for optimizing HVAC systems, reducing energy consumption, and lowering utility costs.",
      imgSrc: energyManagementImg,
      metaData: [
        {
          Know_What_Contributes_To_Energy_Bills:
            "Easily see what it costs to run heating, cooling, hot water, lighting, and other electrical-based systems. Know if equipment is running after hours, using too much energy, or requires maintenance. Monitoring important mechanical systems helps ensure they run as expected.",
        },
        {
          How_Does_It_Work: "To measure detailed electricity use, an electrician installs small clamps, called current transducers (CTs), around the wires for the mains and circuits in an electrical panel. These CTs wire to an electricity meter, which communicates with a gateway. The gateway sends data to the cloud, providing secure access to real-time information and historical reports."
        },
        {
          Energy_Efficient_Equipment: "See the costs and runtimes for importance mechanical systems. Identify equipment using too much energy. It could need maintenance, setting changes, or possible replacement. Plus, see what is running after hours when a building is closed or occupants are asleep. Are all the lights off? How much energy does the defrost cycle use during after hours? If a building is subjected to demand charges, use detailed energy use reports to avoid those peak energy use situations."
        },
      ],
    },
  },
  {
    tabValue: 4,
    data: {
      content:
        "Providing IAQ assessments and implementing solutions to ensure healthy and clean indoor air, improving the overall well-being of occupants. Current scientific and technical understanding of the issues presented. Following the advice given will not necessarily provide complete protection in all situations or against all health hazards that may be caused by indoor air pollution.",
      imgSrc: indoorImg,
      metaData: [
        {
          Improved_Ventilation:
            "Another approach to lowering the concentrations of indoor air pollutants in your home is to increase the amount of outdoor air coming indoors. Advanced designs of new homes are starting to feature mechanical systems that bring outdoor air into the home. Some of these designs include energy-efficient heat recovery ventilators (also known as air-to-air heat exchangers).",
        },
        {
          Air_Cleaners: "There are many types and sizes of air cleaners on the market, ranging from relatively inexpensive table-top models to sophisticated and expensive whole-house systems. Some air cleaners are highly effective at particle removal, while others, including most table-top models, are much less so. Air cleaners are generally not designed to remove gaseous pollutants."
        },
        {
          Source_Control: "Usually the most effective way to improve indoor air quality is to eliminate individual sources of pollution or to reduce their emissions. Some sources, like those that contain asbestos, can be sealed or enclosed; others, like gas stoves, can be adjusted to decrease the amount of emissions"
        },
      ],
    },
  },
  {
    tabValue: 5,
    data: {
      content:
        "Service by offering Cleaner air ducts create a healthier environment for occupants, reducing the risk of allergies, respiratory issues, and other health concerns associated with poor indoor air quality. This multitask air duct cleaning robot will allow you to carry out multiple applications, coupling different modules for cleaning, inspection, and coating inside the air ducts. It incorporates the latest technologies such as FullHD cameras, automatic module elevation system, HMI touch screen control panel, and HD recording system.",
      imgSrc: roboticImg,
      metaData: [
        {
          MODULAR_DESIGN:
            "Multibot is a robotic platform where the different modules can be coupled to carry out all possible applications inside the air-conditioning ducts. cleaning modules with different methodologies, disinfection, and coating.",
        },
        {
          VERSATIL: "The Multibot’s powerful traction crawler allows you to move over any surface and climb slopes of 30º inclination. The robot and the application modules are designed to clean any size of circular or square duct"
        },
        {
          IT_REACHES_THE_TOP: "Thanks to the automated lifting system of the platform, it is possible to clean large size ducts up to 1000mm. The control unit adjust the height with the robot in motion."
        },
        {
          ROBUST_AND_RELIABLE: "Built with the most resistant materials, such as stainless steel in the structure and high density polyamide in the protective shrouding The heart of Multibot are its powerful engines of last generation, which assures us a long duration and reliability."
        },
      ],
    },
  },
  {
    tabValue: 6,
    data: {
      content:
        "We help clients upgrade their existing HVAC systems to the latest models that not only increase energy efficiency but also reduce their carbon footprint, thereby contributing to a greener planet. Aiming to replace your HVAC system before it actually fails will ensure that you have time to price and research options. But since the price tag is hefty, it's not a project to undertake if your only motivation is trimming costs. You should check first for underlying problems, such as leaky ductwork, that can be fixed to increase your comfort and energy efficiency with less cash outlay.",
      imgSrc: upgradeImg,
      metaData: [
        {
          Consider_These_Things_First:
            "An HVAC system works at its peak with a good supporting cast: a properly programmed thermostat, well-sealed ductwork and adequate insulation. Make sure these items are in place before you make a purchase decision, as they could actually be the source of your problems.",
        },
        {
          Choose_Your_System: "If your HVAC pro says it's time for an upgrade, your options depend on where you live. For most U.S. residents, the most efficient units combine a natural gas furnace for heating and an electric unit for cooling. But if you live in a moderate climate, an air-source heat pump may be your best choice."
        },
        {
          Size_It_Properly: "Your HVAC system serves as a dehumidifier. An oversized system will cool the house too quickly and shut off prematurely, which means incoming air won't be completely dehumidified. The combo of colder surfaces and wetter air in your house can cause condensation and mold growth. If mold spreads to drywall or joists, you could face an eye-popping repair bill."
        },
        {
          Leave_It_to_the_Professionals: "Improper installation can reduce your system's efficiency by as much as 30 percent. In other words, it can actually cancel out the savings you're expecting from upgrading to a more efficient model. HVAC installation is a job for a licensed, insured contractor with good references."
        },
      ],
    },
  },
];

//BMS Data
export const BMS_TAB_LIST_ARR = [
  {
    title: "Comprehensive System Integration",
    tabValue: 0,
  },
  {
    title: "Real-time Monitoring and Analytics",
    tabValue: 1,
  },
  {
    title: "Remote Access and Control",
    tabValue: 2,
  },
  {
    title: "Customized Reporting and Dashboards",
    tabValue: 3,
  },
  {
    title: "Energy Efficiency and Sustainability",
    tabValue: 4,
  },
];
export const BMS_TAB_PANEL_CONTENT_ARR = [
  {
    tabValue: 0,
    data: {
      content:
        "We possess extensive experience in integrating diverse building systems, such as HVAC, lighting, access control, and security, into a centralized BMS platform. This streamlines operations and ensures optimal resource utilization.",
      imgSrc: integrationImg,
      metaData: [
        {
          Integration_into_interiors:
            "The right product experience is essential for driving a better customer experience and that goes for air conditioning, too. Going beyond energy efficiency, features, functions, and, of course, quality, consumers are interested in investing in air conditioning products and accessories that integrate into interiors easily to create harmonious spaces that support the customer experience.",
        },
        {
          Air_Conditioning_Design_in_Businesses: "Naturally, this includes the technology that is installed, and air conditioning equipment is a large part of that. finding the right air conditioning solutions that offers high performance while it integrates seamlessly is a must for any business hoping to make the right impression"
        },
        {
          Hitachi_Silent_Iconic: "It's a premium 4-way cassette unit design panel crafted to reduce the visual impact of cassette unit in a space’s ceiling and offer an aesthetically pleasing solution that helps units become “silent” in their appearance. The aesthetic harmony of Silent-Iconic is brought to life through the streamlined air outlets and louvered central inlet, further minimizing the visual impact of the product and elevating the look and feel of it."
        },
      ],
    },
  },
  {
    tabValue: 1,
    data: {
      content:
        "Our BMS solutions provide real-time monitoring and analytics, empowering clients to make data-driven decisions that improve energy efficiency, occupant comfort, and maintenance effectiveness. Diagnose A/C problems anywhere with real-time and historical insights on your phone or laptop.",
      imgSrc: monitorImg,
      metaData: [
        {
          Remotely_verify_installs_and_repairs:
            "There’s no need to do return visits to check up on new systems or repairs because A/C diagnostics can be viewed from anywhere at any time – even on the same day as the install or repair.",
        },
        {
          Troubleshoot_faster: "Seeing the entire history of a unit’s performance before arriving onsite and without the need to run the system with gauges attached means contractors can fix problems faster. A/C insights are shared between HVAC technicians allowing more senior techs to remotely assist junior techs with troubleshooting."
        },
        {
          Schedule_service_calls_smarter: "Contractors can prioritize repairs based on A/C diagnostics viewable on the AlertAQ™ platform. Smaller problems can be fixed before systems break down eliminating the need for after-hours emergency repair calls."
        },
        {
          Build_long_lasting_customer_relationships: "Whenever your customers have a problem, you’ll receive a detailed alert allowing you to contact customers before they need to call you. Customers benefit from significant decreases in A/C down time, more efficient systems, and potential energy savings."
        },
      ],
    },
  },
  {
    tabValue: 2,
    data: {
      content:
        "With our advanced BMS offerings, clients can remotely access and control building systems, allowing for proactive adjustments and immediate responses to changing conditions. Increases Visibility and Reduces Operational Cost",
      imgSrc: remoteImg,
      metaData: [
        {
          Peace_of_Mind_with_SpectraCool_Remote_Access_Control: "Adding Remote Access Control to your cooling system increases visibility for alarms from cooling systems across all global locations, hence you can address issues before any damage is caused to critical manufacturing components. This also helps to improve the maintenance efficiency as you can remotely adjust temp settings and eliminate manual functionality check-ups. All of these factors combined will help to minimize downtime and reduce the operational cost!",
        },
        {
          Visibility: "Access to all cooling devices across all global locations from a single network."
        },
        {
          Immediate_Detection: "Identify failure and address issues immediately immunizes downtime."
        },
        {
          Reduced_Maintenance_Costs: "Reduce the chance of failure and replacement and minimize downtime."
        },
        {
          Increased_Maintenance_Efficiency: "Remotely adjust temp settings and eliminate manual functionality checks."
        },
        {
          Increased_Safety: "Added mitigation of injury or incident by monitoring enclosure door sensor alarms."
        },
      ],
    },
  },
  {
    tabValue: 3,
    data: {
      content:
        "We design intuitive reporting interfaces and dashboards that offer valuable insights into building performance, enabling stakeholders to identify trends and make informed decisions. et up reports and dashboards to deliver information to your users in the ways that work best for them.",
      imgSrc: reportsImg,
      metaData: [
        {
          Provide_Convenience_Features_for_Your_Report_and_Dashboard_Users:
            "You can enable or disable several user interface features that may help your users get more out of reports and dashboards. These settings are for convenience and ease of use; they don’t affect the data returned in your reports and dashboards.",
        },
        {
          Let_Users_Attach_Files_to_Report_Subscriptions: "Let users who subscribe to reports choose to receive report results as a formatted spreadsheet (.XLSX) or a comma-separated (.CSV) file attached to the subscription email. The email itself includes the report name in the subject line, but there is no email body. Row-level record details are included in the attached file instead."
        },
        {
          Hide_the_Embedded_Salesforce_Classic_Report_Builder_in_Lightning_Experience: "Give your users the complete Lightning experience by hiding the embedded Salesforce Classic report builder."
        },
        {
          Customize_Report_and_Dashboard_Email_Notifications: "Enable report and dashboard email notifications to allow all internal and community (portal) users specified as recipients to receive report and dashboard notifications. If this option isn’t enabled, only internal Salesforce users can receive the notifications. This option is available to Enterprise, Unlimited, and Performance Edition organizations that have a Customer Portal or partner portal set up as part of Experience Cloud."
        },
      ],
    },
  },
  {
    tabValue: 4,
    data: {
      content:
        "As part of our commitment to sustainability, we focus on optimizing energy consumption through intelligent control strategies, resulting in reduced operating costs and a reduced environmental footprint. Developing 100% clean energy at scale for NEOM and ultimately the entire planet. Via unrivalled wind and solar resources, and through the world's largest hydrogen plant, we will incubate and accelerate renewable solutions. Our goal is to move beyond zero carbon to a circular economy, using future thinking to drive the change.",
      imgSrc: energyImg,
      metaData: [
        {
          Check_the_label:
            "We have spoken about 'vampire household appliances' in other articles and the expense they represent for your home in the long term. Although they are initially inexpensive, you pay the difference in the long run. An efficient air conditioning device can save up to 60% more than a conventional one.",
        },
        {
          Monitor_and_regulate_the_temperature: "You should be comfortable in your home, so it is important to know that the most appropriate temperature is 22 ºC. Don't forget that your electricity bill can increase as much as 8% for every additional degree of lower temperature that you set."
        },
        {
          Always_keep_your_device_in_good_running_condition: "keeping the air filters clean is essential for proper operation of the air conditioning unit."
        },
        {
          Get_into_the_habit_of_taking_steps_to_cool_your_home: "ventilating at night or early in the morning will refresh the room temperature (10 minutes is enough). Allowing less light into the house during the rest of the day will prevent the temperature of your home from rising. When you are going to leave your home, switch off the air conditioning shortly beforehand, since the cool air will remain for a while."
        },
        {
          Always_ask_for_advice_from_specialists: "It is not the same to cool a small area and to cool a room receiving direct sunlight for longer periods of time. You should choose a different device for each case to achieve greater energy savings."
        },
      ],
    },
  },
];