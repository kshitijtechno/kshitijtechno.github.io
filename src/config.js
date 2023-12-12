const config = {
    siteName: "Kshitij Techno",
    menuItem1: "About",
    menuItem2: "Products & Services",
    menuItem3: "Blog",
    menuItem4: "Videos",
    contact: "Contact",
    disclaimer: "Disclaimer",
    createby: "Created by : Kshitij Wardhan Ahirwar",
    
    home_showDialog: false,
    home_dialog_title: "Request",
    home_dialog_content:"This site is under development. I want to know the public reviews so I can make it more better. Please explore the whole site and provide your valuable feedback. For giving feedback you can navigate to Contact page.",

    contactus_modeldata_title:  "Information",
    contactus_modeldata_careers_title:  "Want to contribute?",
    contactus_modeldata_careers_message:  "If you want to contribute towards our work and vision. You are always welcomed. Please feel free to reach out anytime.",
    contactus_modeldata_data:"Whatsapp us on +91-9036623883",
    youtube_modeldata_message: "To to show your support please visit <a href='https://www.youtube.com/@kshitijwardhan' target='_blank' rel='noopener noreferrer'> Kshitij Wardhan Ahirwar </a> my youtube channel. Please do watch, like, comment, share & subscribe to my channel",
    youtubeVideosTechnology: [
      {
        videoId: "dOEf3qabuW0?si=gHjS9ucy5ZmReyqV",
        title: "Git tutorial for beginners and experienced software professionals",
        content:
          "Hey viewers this video contains the tutorial for git. After watching it you will get to know the various commands of git. Its specially created for freshers and I have tried to keep explanation very simple. Experienced developer can also refer this guide.",
      },
      {
        videoId: "1-2v8XEIYsM?si=51-H8_vCwwgAevRL",
        title: "Altimetrik wfh kit unboxing",
        content: "Unboxing of WFH kit from Altimetrik.",
      },
    ],
    youtubeVideosMisc: [
      {
        videoId: "EpGZ5Be603c?si=rNatqHZjoCEDCAVc",
        title: "Glimpses of Sethani Ghat Narmadapuram Madhya Pradesh",
        content:
          "Sethani Ghat is located at Narmada river bank, District Narmadapuram Madhya Pradesh. Nice place to visit. We can best visit the place either morning or evening so aarti can be attended. I went to this trip on 5th April 2023.",
      },
      {
        videoId: "ksb6Lh82yQs?si=TzhAL68ymVLuBMEW",
        title: "Besli Dam Gohad",
        content: "Besli Dam Gohad",
      },
    ],
    blog_questionAnswer: [
      {
        question: "What is SAP Hybris?",
        answer: "SAP Hybris or later renamed as SAP Commerce cloud is an e-commerce, digital marketing solution. It's owned by SAP.",
      },
      {
        question: "What is current version of SAP Commerce cloud?",
        answer: "Current version is 2211.",
      },
      {
        question: "Is SAP Commerce cloud is free to use?",
        answer: "No its not free. We should have license to use it.",
      },
      {
        question: "How we can learn SAP Commerce cloud development or Hybris development?",
        answer: `To learn the development, nowadays lots of contents are available on Internet. 
        But you can't do hands-on until you have "Hybris Suite". Usually companies who works on the Hybris projects they will purchase the license from SAP
        and will give access of suite to their employees.`,
      },
      {
        question: "What is e-commerce solution?",
        answer: "E-commerce is a platform where end user can place the orders. Customer could be a retail customer, business customer etc.",
      },
      {
        question: "What are the examples of e-commerce solutions?",
        answer: "Amazon, Flipkart, Nayka, Meesho, Taka Cliq are some examples of e-commerce solutions.",
      },
      {
        question: "SAP Commerce cloud is based on what programming language?",
        answer: "It's based on Java programming language. SAP commerce cloud uses Spring framework.",
      },
      {
        question: "What is difference between SAP Hybris and SAP Commerce Cloud?",
        answer: "Both are same. SAP Hybris is renamed as SAP Commerce Cloud.",
      },
      {
        question: "What is items.xml?",
        answer: `items.xml is an xml file. It holds items definition for entire application. Usually it resides inside core extensions resources folder.
        Standard naming convention for the file is *extensionname*-items.xml e.g. core-items.xml. Here "core" is the extension name. Below is the structure of items.xml`,
        code:`        <items>
          <atomictypes>
            <atomictype class="java.lang.Object" autocreate="true" generate="false"/>
            <atomictype class="java.lang.Integer" extends="java.lang.Number" autocreate="true" generate="false"/>
            <atomictype class="java.lang.String" extends="java.lang.Object" autocreate="true" generate="false"/>
          </atomictype>
          <collectiontypes>
            <collectiontype code="ExampleCollection" elementtype="Item" autocreate="true" generate="false" type="list"/>
            <collectiontype code="DeliveryModeCollection" elementtype="DeliveryMode" autocreate="true" generate="false" type="set"/>
            <collectiontype code="MediaCollection" elementtype="Media" autocreate="true" generate="false"/>
            <collectiontype code="AadharNumberCollection" elementtype="java.lang.Number" autocreate="true" generate="false"/>
          </collectiontypes>
          <enumtypes>
            <enumtype code="TestEnum">
              <value code="testValue1"/>
              <value code="testValue2"/>
            </enumtype>
            <enumtype code="CredtiCardType">
              <value code="amex"/>
              <value code="visa"/>
              <value code="master"/>
            </enumtype>
          </enumtypes>
          <maptypes>
            <maptype code="ExampleMap"
                     argumenttype="Student"
                     returntype="java.lang.Integer"
                     autocreate="true"
                     generate="false"/>
            <maptype/>
          </maptypes>
          <relations>
            <relation code="OrderDiscountRelation" autocreate="true" generate="false" localized="false"
              deployment="com.wardhan.techno.OrderDiscountRelation">
              <sourceElement qualifier="orders" type="AbstractOrder" cardinality="many" ordered="false">
                <modifiers read="true" write="true" search="true" optional="true"/>
              </sourceElement>
              <targetElement qualifier="discounts" type="Discount" cardinality="many" ordered="true"
                collectiontype="list">
                <modifiers read="true" write="true" search="true" optional="true"/>
              </targetElement>
            </relation>
          </relations>
          <itemtypes>
            <itemtype code="Customer" extends="User" jaloclass="de.hybris.platform.jalo.user.Customer" 
              autocreate="true" generate="true">
              <deployment table="Customer" typecode="31000"/>
              <attributes>
                <attribute autocreate="true" qualifier="customerId" type="java.lang.String">
                  <modifiers read="true" write="true" search="true" optional="true"/>
                  <persistence type="property"/>
                </attribute>
              </attributes>
            </itemtype>
          </itemtypes>
        </items>`,
      },
      {
        question: "Name the basic tags used in items.xml",
        answer: `atomictypes, collectiontype, enumtypes, maptypes, relations, itemtypes
        <p>"items" is the root tag for items.xml. These tags are fixed and we cannot change the sequence of the tags.          
        To remember the sequence of the tags you can use formula "ACE MRI".  
        XSD(XML schema definition) is items.xsd. Please do check this file for better understanding`,
      },
      {
        question: "Explain atomictype.",
        answer: `An AtomicType represent a simple java object. The name ('atomic') means 'non-composed' objects.
        <p>Object, Number, Integer, Boolean, String, Map are the example of atomic type.`,
      },
    ],

    clientCommentDisplay:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTd1pmnxR9m5aMyIVQ5uaIWY9OXW2T3zf4eszQLDVvlfslmGqhV3yKlHtHI_2HRc1P7x5Vy5U9ZgFYM/pub?gid=508978835&single=true&output=csv",
  
  };
  
export default config;