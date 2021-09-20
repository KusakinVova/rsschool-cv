![Vladimir Kusakin](assets/img/photo.jpg)
# Vladimir **Kusakin**

## 📞 Contacts 

| :---     |  :---                                            |
| telegram | [@kusakinvladimir](https://t.me/kusakinvladimir) |
| email    | [kusakinvova@gmail.com](kusakinvova@gmail.com)   |
| github   | [KusakinVova](https://github.com/KusakinVova)    |
| discord  | KusakinVova (@kusakinvova)                       |

&nbsp;

## 📝 Summary 
I am web developer. I've been developing applications for the web using mostly PHP with poplar CMS (Drupal, 1C-Bitrix, Wordpress) since 2013.

The main goal is starting my career as a Middle Front-End developer. I want to improve my JavaScript skills and to get the the Frontend-job  next year.

&nbsp;

## 🧩 Skills
* PHP (1C-Bitrix, Drupal 7, Wordpress) 
* HTML, CSS (Bootstrap, Materialize)
* JavaScript (jQuery)
* NodeJS
* Python (django)
* DB (MySQL, PostgreSQL)

&nbsp;

## 💾 Example of My Code
PHP (1C-Bitrix) 
Using BitrixAPI for get value UserFields
```PHP
$arSectionsInfo = array();
foreach ($arResult['SECTION']['PATH'] as $key => $SECTION) {
    $uf_arresult = CIBlockSection::GetList(Array(), Array("IBLOCK_ID" => $arResult['IBLOCK_ID'], "ID" => $SECTION['ID']), false, Array( "ID" , "UF_LINK_INFO" ));
    if($uf_value = $uf_arresult->GetNext()):
        $arSectionsInfo = array_unique(array_merge($arSectionsInfo, $uf_value['UF_LINK_INFO']));
    endif;
}
if($arSectionsInfo){
    $rs = CIBlockElement::GetList(
       [],
       ['IBLOCK_ID' => '36', 'ID' => $arSectionsInfo],
       false, false,
       ['ID', 'IBLOCK_ID', 'NAME', 'PREVIEW_TEXT', 'PROPERTY_YOUTUBE_LINK']
    );
    $arSectionsInfo = array();
    while ($ar = $rs->Fetch()) {
       $arSectionsInfo[$ar['ID']] = $ar;
    }
    $arResult['ELEMENT_LINKS'] = $arSectionsInfo;
}
```

Python. Create new images which have barcode and QRcode from information xlsx file [code](https://github.com/KusakinVova/createImage)

&nbsp;

## 👨‍💻 Experience

| :--- | :--- |
| 2018 — Present | Web developer <br> Individual entrepreneur, freelance                               |
| 2017 — 2018    | Python and PHP programmer <br> Ltd "Consulting Center "Kingston Apon Hill""         |
| 2015 — 2017    | Full stack web developer <br> Ltd Alloinfo                                          |
| 2014 — 2015    | Full stack web developer <br> Ltd MyHome                                            |
| 2013 — 2014    | PHP programmer <br> Ltd STIB                                                        |
| 2012 — 2013    | Engineer of the department of automated technical processes <br>AVDIIVKA COKE PLANT |

&nbsp;

## 🎓 Education

### Online learning

| :--- | :---                                                                                            |
| 2013 | **Bitrix Framework Developer**<br>Ltd "1C-Bitrix"                                               |
| 2013 | **Basic CSS** <br> NOU "INTUIT"                                                                 |
| 2010 | **Java Fundamental**<br>Java Fundamental сourses powered by Sun Microsystems <br>DonNTU UNITECH |

### Higher education

| :--- | :--- |
| 2005 — 2011 | **Master's degree** <br> **University:** Donetsk National Technical University <br> **Faculty:** Computer Sciences and Technologies (CST)<br> **Department:** Automated Control Systems (ACS)<br> **Speciality:** Information Control Systems and Technologies (ICS) |

&nbsp;

## 📚 English 
* Pre-intermediate/Intermediate (A2/B1)

