const config = {
    siteName: "Kshitij Techno",
    menuItem1: "Home",
    menuItem2: "Products",
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
        question: "SAP Commerce Cloud uses which database?",
        answer: "It uses HSQL database OOTB(Out of the box). It also support different databases like Oracle, MySql etc. We can specify database related configurations inside local.properties file.",
      },
      {
        question: "SAP Commerce Cloud uses which server?",
        answer: "It uses Apache tomcat OOTB.",
      },
      {
        question: "SAP Commerce Cloud uses which search engine?",
        answer: "It uses Apache Solr search engine.",
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

    hybrisLocalSetupGuide: [
      {
        textContent1:"This guide is to help you to setup Hybris 2211 in local. It will setup OOTB hybris ecommerce sites.",
        textContent2:`Please note hybris project setup step's may vary when you work on the actual project in a company but the core concepts going to be same.
        The given steps are for MacOS.`,
        textContent3: `
        <b>Steps 1.</b> Download SAP Commerce Cloud Suite 2211<br />
        Download the suite from SAP official site or please ask your employer to provide you the suite
        . SAP commerce cloud is not open source, it is protected with license. <br/>
        <b>Steps 2.</b> Download and install JDK<br />
        Download openJdk from <a href="https://sap.github.io/SapMachine/" target='_blank' rel='noopener noreferrer'>https://sap.github.io/SapMachine/</a>. Please select options as below and click on download button. SAP Commerce cloud 2211 need atleast JDK 17.`,
        textContent4:`You can also use oracle JDK but SAP recommends to use above JDK for better compatibility.
        After installing openJdk please double check the version using command "java -version".<br/>`,
        textContent5:`<b>Steps 3.</b> Unzip the suite and extract all the files to a folder. I have created a new folder "hybris_2211" inside that lets extract the suite. It should have below structure. 
        Please have a closer look at the folder structure, you will notice inside hybris folder only bin folder exists.`,
        textContent6:`<b>Steps 4.</b> Open terminal and navigate to /hybrisroot-folder/installer i.e. /hybris_2211/installer folder and trigger command "./install.sh -r cx setup -A initAdminPassword=nimda". nimda is password, you can change it if you want. Hit enter button and wait for it to complete. Please make sure you do not stop it inbetween. This command will setup the platform.<br/>
        install.sh : It's a command which executes corresponding groovy script to setup the platform.<br/>
        -r : represents recipe<br/>
        cx : is recipe name. ./install.sh -l will give you the list of recipes which hybris provides OOTB.<br/>
        -A : is for additional parameter<br/>
        initAdminPassword : is attribute to set admin password.`,  
        textContent7:'Once it is successful you should see the build successful message in terminal as below.',
        textContent8:`<b>Steps 5.</b> Please execute "./install.sh -r cx initialize -A initAdminPassword=nimda"<br/>
        initialize : initialize the platform<br/>`,
        textContent9 :`On successful initialization you would see success message at terminal as below. Initilization takes time so be patience. For me it took around 2 hours.`,
        textContent10 :`<b>Steps 6.</b> Please execute "./install.sh -r cx start" to start the platform.<br/>`,
        textContent11 :`"INFO: Server startup in 818893 ms". 818893 is time in milliseconds, server took to start. Again time may vary for individual.`,
        textContent12 :`<b>Steps 7.</b> Congratulations!!! Server started successfully.<br/>
        Sites are accessible on below urls:<br/>
        <a href="https://localhost:9002/yacceleratorstorefront/?site=electronics&clear=true" target='_blank' rel='noopener noreferrer'>https://localhost:9002/yacceleratorstorefront/?site=electronics&clear=true</a> <br/>
        <a href="https://localhost:9002/yacceleratorstorefront/?site=apparel-uk&clear=true" target='_blank' rel='noopener noreferrer'>https://localhost:9002/yacceleratorstorefront/?site=apparel-uk&clear=true</a> <br/>
        As a part of recipe installation, Hybris will configure multiple sites. These all sites are mostly production ready. You can visit /hybris_2211/config/local.properties file to check the url of other sites.`,
        textContent13 :`We are done with site setup using recipe, lets see the changes in folder structure.<br/>
        *inside /hybris_2211/hybris/ other folders also created e.g. config, data, log etc.<br/>
        *inside /hybris_2211/hybris/bin/ custom folder is created. Custom folder is very important.<br/>
        *inside /hybris_2211/hybris/config/local.properties and localextensions.xml files are created.` ,
        textContent14 :`Inside custom folder yacceleratorstorefront is created. yacceleratorstorefront we call this as storefront. A storefront can have multiple sites.
        This storefront is generated by hybris using recipe. Let's create our own storefront. Please stop the server by pressing ctrl+c keys. <br/>
        Delete folder yacceleratorstorefront from custom folder.<br/>
        Open /hybris_2211/hybris/config/localextension.xml with any text editor and remove <extension name='yb2bacceleratorstorefront' /> entry.<br/>
        <b>Steps 8.</b> Open new terminal or navigate to /hybris_2211/hybris/bin/platform/ and trigger command ". ./setantenv.sh"`,
        textContent15 :`<b>Steps 9.</b> Trigger command "ant modulegen" . Please keep an eye on terminal it will
        ask few details in between.`,
        textContent16 :`<b>Steps 10.</b> Please press enter key`,
        textContent17 :`<b>Steps 11.</b> I have passed kshitijtechno. You can write anytext here. Please don't give any spaces. This will be treated as storefront name. You can also press enter key without passing any value, hybris will create default training storefront.`,
        textContent18 :`<b>Steps 12.</b> I have passed org.kshitijtechno. This will be the package name used in the classes. The default package name org.training will be used if you pass empty here.`,
        textContent19 :`<b>Steps 13.</b> On completion of "ant modulegen" command, we should see below instructions in terminal. Please follow on screen instructions carefully.`,
        textContent20 :`I have added generated extensions details in my localextension.xml`,
        textContent21 :`Please remove these extensions from your properties. Otherwise it will give build errors.`,
        textContent22 :`<b>Steps 14.</b> Please run command "ant". It will build the storefront.`,
        textContent23 :`<b>Steps 15.</b> After "ant" successfully executes. Run command "./hybrisserver.sh"<br/>
        If you want to debug the Java code you should run command "./hybrisserver.sh debug"`,
        textContent24 :`Server started successfully!!! You can access new storefront at urls :<br/>
        <a href="https://localhost:9002/kshitijtechnostorefront/?site=electronics&clear=true" target='_blank' rel='noopener noreferrer'>https://localhost:9002/kshitijtechnostorefront/?site=electronics&clear=true</a> <br/>
        <a href="https://localhost:9002/kshitijtechnostorefront/?site=apparel-uk&clear=true" target='_blank' rel='noopener noreferrer'>https://localhost:9002/kshitijtechnostorefront/?site=apparel-uk&clear=true</a> <br/>`,
        textContent25 :`<b>If you face any difficulities during following the guide please contact us. You can show your support by providing your valuable comments on Cantact Us page. Thankyou so much !!!</b>`,
        textContent26 :`Hybris has created new folder inside custom folder called "kshitijtechno" and inside it has created 7 extension to support site functionality. We will modify the custom folder contents during the development.`
      },
    ],

    clientCommentDisplay:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTd1pmnxR9m5aMyIVQ5uaIWY9OXW2T3zf4eszQLDVvlfslmGqhV3yKlHtHI_2HRc1P7x5Vy5U9ZgFYM/pub?gid=508978835&single=true&output=csv",
  
  };
  
export default config;