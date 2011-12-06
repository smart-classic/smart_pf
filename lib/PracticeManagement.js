(function() {
if (typeof exports !== "undefined") {
    WSDL_Interface = require("pf_wsdl").WSDL_Interface;
}
var PracticeManagement = {};
PracticeManagement.wsdl = {
  "types": {
    "GetAnnouncements": {
      "s:element": [
        {
          "@": {
            "name": "GetAnnouncements"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_dtTargetDate",
                        "type": "s:dateTime"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetAnnouncementsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetAnnouncementsResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "GetAnnouncementsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrAnnouncements",
                        "type": "tns:ArrayOfBL_Announcement"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetPublicAnnouncements": {
      "s:element": [
        {
          "@": {
            "name": "GetPublicAnnouncements"
          },
          "s:complexType": [
            {}
          ]
        }
      ]
    },
    "GetPublicAnnouncementsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPublicAnnouncementsResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "GetPublicAnnouncementsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrAnnouncements",
                        "type": "tns:ArrayOfBL_Announcement"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "LogAnnouncement": {
      "s:element": [
        {
          "@": {
            "name": "LogAnnouncement"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lAnnouncementID",
                        "type": "s:long"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "LogAnnouncementResponse": {
      "s:element": [
        {
          "@": {
            "name": "LogAnnouncementResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "LogAnnouncementResult",
                        "type": "tns:WebServiceResponse"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetWebServiceInformation": {
      "s:element": [
        {
          "@": {
            "name": "GetWebServiceInformation"
          },
          "s:complexType": [
            {}
          ]
        }
      ]
    },
    "GetWebServiceInformationResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetWebServiceInformationResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "GetWebServiceInformationResult",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strAssemblyVersions",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strInformation",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "Ping": {
      "s:element": [
        {
          "@": {
            "name": "Ping"
          },
          "s:complexType": [
            {}
          ]
        }
      ]
    },
    "PingResponse": {
      "s:element": [
        {
          "@": {
            "name": "PingResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "PingResult",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetUserSecurityQuestion": {
      "s:element": [
        {
          "@": {
            "name": "GetUserSecurityQuestion"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPracticeIdentifier",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strUserName",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetUserSecurityQuestionResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetUserSecurityQuestionResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "GetUserSecurityQuestionResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_lQuestionID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strQuestion",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "ValidateSecurityQuestionAndAnswer": {
      "s:element": [
        {
          "@": {
            "name": "ValidateSecurityQuestionAndAnswer"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_iSource",
                        "type": "s:int"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPracticeIdentifier",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strUserName",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lQuestionID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strAnswer",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "ValidateSecurityQuestionAndAnswerResponse": {
      "s:element": [
        {
          "@": {
            "name": "ValidateSecurityQuestionAndAnswerResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "ValidateSecurityQuestionAndAnswerResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_iResult",
                        "type": "s:int"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "SunriseSignup": {
      "s:element": [
        {
          "@": {
            "name": "SunriseSignup"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lFacility",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_SunriseDetails",
                        "type": "tns:BL_SunriseDetails"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "SunriseSignupResponse": {
      "s:element": [
        {
          "@": {
            "name": "SunriseSignupResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "SunriseSignupResult",
                        "type": "tns:WebServiceResponse"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "PreLogin": {
      "s:element": [
        {
          "@": {
            "name": "PreLogin"
          },
          "s:complexType": [
            {}
          ]
        }
      ]
    },
    "PreLoginResponse": {
      "s:element": [
        {
          "@": {
            "name": "PreLoginResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "PreLoginResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strAssemblyVersions",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strInformation",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Specialties",
                        "type": "tns:ArrayOfBL_Specialization"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrAnnouncements",
                        "type": "tns:ArrayOfBL_Announcement"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bNewUserSignupsEnabled",
                        "type": "s:boolean"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserLogin": {
      "s:element": [
        {
          "@": {
            "name": "UserLogin"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPracticeID",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strUsername",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPassword",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strClientVersion",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserLoginResponse": {
      "s:element": [
        {
          "@": {
            "name": "UserLoginResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "UserLoginResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_UserProfile",
                        "type": "tns:BL_UserProfile"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_lUserCRMRole",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_LabProfile",
                        "type": "tns:BL_LabProfile"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrAnnouncements",
                        "type": "tns:ArrayOfBL_Announcement"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPracticePermission",
                        "type": "tns:ArrayOfBL_User_Permission"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrUserPermission",
                        "type": "tns:ArrayOfBL_Permission"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrAd",
                        "type": "tns:ArrayOfBL_Advertisement"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bIs100ChartPulls",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strExternalUserGuid",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserLoginQuick": {
      "s:element": [
        {
          "@": {
            "name": "UserLoginQuick"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPracticeID",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strUsername",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPassword",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strClientVersion",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserLoginQuickResponse": {
      "s:element": [
        {
          "@": {
            "name": "UserLoginQuickResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "UserLoginQuickResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_UserQuick",
                        "type": "tns:BL_UserQuick"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_lUserCRMRole",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_LabProfile",
                        "type": "tns:BL_LabProfile"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrAnnouncements",
                        "type": "tns:ArrayOfBL_Announcement"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPracticePermission",
                        "type": "tns:ArrayOfBL_User_Permission"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrUserPermission",
                        "type": "tns:ArrayOfBL_Permission"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrAd",
                        "type": "tns:ArrayOfBL_Advertisement"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bIs100ChartPulls",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strExternalUserGuid",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserSignup": {
      "s:element": [
        {
          "@": {
            "name": "UserSignup"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_SignUp",
                        "type": "tns:BL_SignUp"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strClientVersion",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPartnerCode",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strEntryCode",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserSignupResponse": {
      "s:element": [
        {
          "@": {
            "name": "UserSignupResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "UserSignupResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strPracticeIdentifier",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strUserName",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strTempPassword",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strExternalUserGuid",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_UserProfile",
                        "type": "tns:BL_UserProfile"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrAd",
                        "type": "tns:ArrayOfBL_Advertisement"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPracticePermission",
                        "type": "tns:ArrayOfBL_User_Permission"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrUserPermission",
                        "type": "tns:ArrayOfBL_Permission"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "AreNewUserSignupsEnabled": {
      "s:element": [
        {
          "@": {
            "name": "AreNewUserSignupsEnabled"
          },
          "s:complexType": [
            {}
          ]
        }
      ]
    },
    "AreNewUserSignupsEnabledResponse": {
      "s:element": [
        {
          "@": {
            "name": "AreNewUserSignupsEnabledResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "AreNewUserSignupsEnabledResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bEnabled",
                        "type": "s:boolean"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "ScreenUnlock": {
      "s:element": [
        {
          "@": {
            "name": "ScreenUnlock"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPracticeIdentifier",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strUsername",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPassword",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "ScreenUnlockResponse": {
      "s:element": [
        {
          "@": {
            "name": "ScreenUnlockResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "ScreenUnlockResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_Success",
                        "type": "s:boolean"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserAcceptLicenseAgreement": {
      "s:element": [
        {
          "@": {
            "name": "UserAcceptLicenseAgreement"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_Session",
                        "type": "tns:BL_Session"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserAcceptLicenseAgreementResponse": {
      "s:element": [
        {
          "@": {
            "name": "UserAcceptLicenseAgreementResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "UserAcceptLicenseAgreementResult",
                        "type": "tns:WebServiceResponse"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserChangePassword": {
      "s:element": [
        {
          "@": {
            "name": "UserChangePassword"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strCurrentPassword",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strNewPassword",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserChangePasswordResponse": {
      "s:element": [
        {
          "@": {
            "name": "UserChangePasswordResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "UserChangePasswordResult",
                        "type": "tns:WebServiceResponse"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserLogout": {
      "s:element": [
        {
          "@": {
            "name": "UserLogout"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_Session",
                        "type": "tns:BL_Session"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_eReason",
                        "type": "tns:LogoutReason"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "UserLogoutResponse": {
      "s:element": [
        {
          "@": {
            "name": "UserLogoutResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "UserLogoutResult",
                        "type": "tns:WebServiceResponse"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetVendorLogoByPartner": {
      "s:element": [
        {
          "@": {
            "name": "GetVendorLogoByPartner"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPartnerCode",
                        "type": "s:string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetVendorLogoByPartnerResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetVendorLogoByPartnerResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "GetVendorLogoByPartnerResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrVendorLogo",
                        "type": "tns:ArrayOfBL_VendorLogo"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetVendorLogoByUser": {
      "s:element": [
        {
          "@": {
            "name": "GetVendorLogoByUser"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_Session",
                        "type": "tns:BL_Session"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "GetVendorLogoByUserResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetVendorLogoByUserResponse"
          },
          "s:complexType": [
            {
              "s:sequence": [
                {
                  "s:element": [
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "GetVendorLogoByUserResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrVendorLogo",
                        "type": "tns:ArrayOfBL_VendorLogo"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "string": {
      "s:element": [
        {
          "@": {
            "name": "string",
            "nillable": "true",
            "type": "s:string"
          }
        }
      ]
    },
    "BL_eAction": {
      "s:simpleType": [
        {
          "@": {
            "name": "BL_eAction"
          },
          "s:restriction": [
            {
              "@": {
                "base": "s:string"
              },
              "s:enumeration": [
                {
                  "@": {
                    "value": "None"
                  }
                },
                {
                  "@": {
                    "value": "Add"
                  }
                },
                {
                  "@": {
                    "value": "Update"
                  }
                },
                {
                  "@": {
                    "value": "Delete"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "LogoutReason": {
      "s:simpleType": [
        {
          "@": {
            "name": "LogoutReason"
          },
          "s:restriction": [
            {
              "@": {
                "base": "s:string"
              },
              "s:enumeration": [
                {
                  "@": {
                    "value": "UserRequested"
                  }
                },
                {
                  "@": {
                    "value": "InactivityTimeout"
                  }
                },
                {
                  "@": {
                    "value": "LicenseAgreementNotAccepted"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "s:string": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:string"
          }
        }
      ]
    },
    "s:float": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:float"
          }
        }
      ]
    },
    "s:dateTime": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:dateTime"
          }
        }
      ]
    },
    "s:boolean": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:boolean"
          }
        }
      ]
    },
    "s:long": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:long"
          }
        }
      ]
    },
    "s:double": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:double"
          }
        }
      ]
    },
    "s:int": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:int"
          }
        }
      ]
    },
    "BL_Session": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Session"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strToken",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCExpiryDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lWSCallSequenceNumber",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lUserID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "WebServiceResponse": {
      "s:complexType": [
        {
          "@": {
            "name": "WebServiceResponse"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bSuccess",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Status",
                    "type": "tns:BL_Status"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAssemblyVersions",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCRequest",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCResponse",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lExecutionTime",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Status": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Status"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "nErrorNumber",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCategory",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDisplayMessage",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInternalMessage",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "nSeverity",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMessageType",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDescription",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Announcement": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Announcement"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Announcement",
                    "nillable": "true",
                    "type": "tns:BL_Announcement"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Announcement": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Announcement"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "ID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "AnnouncementTypeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "EffectiveStartTime",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "EffectiveEndTime",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Title",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Message",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_SunriseDetails": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_SunriseDetails"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSunriseAccountNumber",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Specialization": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Specialization"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Specialization",
                    "nillable": "true",
                    "type": "tns:BL_Specialization"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Specialization": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Specialization"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strClassification",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSpecialization",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_UserProfile": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_UserProfile"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "User",
                    "type": "tns:BL_User"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Practice",
                    "type": "tns:BL_Practice"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrScheduledEventTypes",
                    "type": "tns:ArrayOfBL_ScheduledEventType"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrOptions",
                    "type": "tns:ArrayOfBL_Option"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPlaceOfServiceTypes",
                    "type": "tns:ArrayOfBL_PlaceOfServiceType"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrTypeOfServiceTypes",
                    "type": "tns:ArrayOfBL_TypeOfServiceType"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrCredentials",
                    "type": "tns:ArrayOfBL_Credential"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrSpecializations",
                    "type": "tns:ArrayOfBL_Specialization"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPayers",
                    "type": "tns:ArrayOfBL_PayerSummary"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrInsurancePlans",
                    "type": "tns:ArrayOfBL_InsurancePlan"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrUserOperations",
                    "type": "tns:ArrayOfBL_UserOperation"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrUserTypesCanCreate",
                    "type": "tns:ArrayOfBL_UserType"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strServiceAgreementText",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDiagnosisTypeCodeSetVersion",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strServiceTypeCodeSetVersion",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrMessageTypes",
                    "type": "tns:ArrayOfBL_MessageType"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrDocumentTypes",
                    "type": "tns:ArrayOfBL_DocumentType"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lMaxRequestLengthBytes",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_User": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_User"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "eAction",
                    "type": "tns:BL_eAction"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSecurityToken",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "UserType",
                    "type": "tns:BL_UserType"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Person",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strUserName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lAffiliatedPracticeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lAffiliatedFacilityID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lAffiliatedProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsLicenseAgreementAccepted",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsPasswordChangeRequired",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsLoginEnabled",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Provider",
                    "type": "tns:BL_Provider"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCAccountExpiryDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSystemAccess",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrUserOperationTypeIDs",
                    "type": "tns:ArrayOfLong"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastScheduledEventAction",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDegree",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_UserType": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_UserType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strTypeName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCategory",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsTestUserType",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sDisplaySequence",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSessionLifespanMinutes",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lWSInactivityTimeoutDurationMinutes",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lUserInactivityTimeoutDurationMinutes",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrCandidateUserOperationTypeIDs",
                    "type": "tns:ArrayOfLong"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfLong": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfLong"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "long",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Person": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Person"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "eAction",
                    "type": "tns:BL_eAction"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strTitleOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOtherTitle",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFirstName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMiddleInitial",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLastName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPreviousLastName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSuffixOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOtherSuffix",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEmployerOrSchoolName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEmployerOrSchoolDepartment",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strJobTitle",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "MailingAddress",
                    "type": "tns:BL_Address"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "PhysicalAddress",
                    "type": "tns:BL_Address"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOfficePhone",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOfficePhoneExtension",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOfficeFax",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strHomePhone",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strHomeFax",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMobilePhone",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPager",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEmail",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAlternateEmail",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSSNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMaritalStatusOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strGenderOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCBirth",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLanguageOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEthnicityOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPhotograph",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strNotes",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsComplete",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsEmailVerificationRequired",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPreferredLanguageID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lEthnicityID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrRaces",
                    "type": "tns:ArrayOfBL_Race"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Address": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Address"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "eAction",
                    "type": "tns:BL_eAction"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAddress1",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAddress2",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAddress3",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCity",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCounty",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strState",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAreaCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCountry",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsComplete",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Race": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Race"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Race",
                    "nillable": "true",
                    "type": "tns:BL_Race"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Race": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Race"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strRaceName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCensusID",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Provider": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Provider"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lFacilityID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsRendering",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsReferring",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bFacilityProviderIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "eAction",
                    "type": "tns:BL_eAction"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Person",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPrimarySpecialization",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSecondarySpecialization",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lCredentialID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strProviderNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEIN",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strNPI",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strUPIN",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStateLicense",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDEANumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStateIndustrialAccidentIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicareIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicaidIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCHAMPUSIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "strEmdeonIdentifier",
                    "nillable": "true",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCMedicareParticipation",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCSignature",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrFavoriteDiagnosisTypeIDs",
                    "type": "tns:ArrayOfLong"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrFavoriteServiceTypeIDs",
                    "type": "tns:ArrayOfLong"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bProviderIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bProviderIsAdministrator",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sEditLevel",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEditLevel",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsComplete",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPayerProviders",
                    "type": "tns:ArrayOfBL_PayerProvider"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bCanReviewRx",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bCanReviewLabs",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPracticeID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PayerProvider": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PayerProvider"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PayerProvider",
                    "nillable": "true",
                    "type": "tns:BL_PayerProvider"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PayerProvider": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PayerProvider"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPayerID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPayerCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPayerName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strProviderIdentifier",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Practice": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Practice"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Community",
                    "type": "tns:BL_Community"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsProductionStatus",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPracticeIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "MainContactPerson",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "BillingContactPerson",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "ClaimsContactPerson",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEIN",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strNPI",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strUPIN",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDefaultSystemAccess",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sWeekStartDay",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strWorkDays",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sWorkDayStartTime",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sWorkDayEndTime",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sScheduleBlockInterval",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sDefaultAppointmentDuration",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sTimeZoneOffsetFromUTC",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDefaultAddressCounty",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDefaultAddressCity",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDefaultAddressState",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDefaultAddressCountry",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPaperClaimFormOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStateIndustrialAccidentIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStateLicense",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicareIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicaidIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCHAMPUSIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastScheduledEventAction",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsShownTextAds",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsShownImageAds",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsShownVideoAds",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrFacilities",
                    "type": "tns:ArrayOfBL_Facility"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPatients",
                    "type": "tns:ArrayOfBL_PatientSummary"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPracticePayer",
                    "type": "tns:ArrayOfBL_PracticePayer"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPhoneNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFaxNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsTimeZoneVerified",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsDaylightSavingsObserved",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrFacilityBasics",
                    "type": "tns:ArrayOfBL_FacilityBasic"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Community": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Community"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "ContactPerson",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "PrimaryLocationAddress",
                    "type": "tns:BL_Address"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Facility": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Facility"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Facility",
                    "nillable": "true",
                    "type": "tns:BL_Facility"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Facility": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Facility"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPracticeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "PlaceOfServiceType",
                    "type": "tns:BL_PlaceOfServiceType"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFacilityTypeOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Address",
                    "type": "tns:BL_Address"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEIN",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strNPI",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strUPIN",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStateIndustrialAccidentIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStateLicense",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicareIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicaidIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCHAMPUSIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastScheduledEventAction",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrProviders",
                    "type": "tns:ArrayOfBL_Provider"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrResources",
                    "type": "tns:ArrayOfBL_FacilityResource"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrAssistants",
                    "type": "tns:ArrayOfBL_User"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPayerFacilities",
                    "type": "tns:ArrayOfBL_PayerFacility"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PlaceOfServiceType": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PlaceOfServiceType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Provider": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Provider"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Provider",
                    "nillable": "true",
                    "type": "tns:BL_Provider"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_FacilityResource": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_FacilityResource"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_FacilityResource",
                    "nillable": "true",
                    "type": "tns:BL_FacilityResource"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_FacilityResource": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_FacilityResource"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lFacilityID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFacilityResourceTypeOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsDoubleBookable",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsTripleBookable",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtLastScheduledEventAction",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_User": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_User"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_User",
                    "nillable": "true",
                    "type": "tns:BL_User"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PayerFacility": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PayerFacility"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PayerFacility",
                    "nillable": "true",
                    "type": "tns:BL_PayerFacility"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PayerFacility": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PayerFacility"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPayerID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lFacilityID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPayerCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPayerName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFacilityIdentifier",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PatientSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientSummary",
                    "nillable": "true",
                    "type": "tns:BL_PatientSummary"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsTestPatient",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFirstName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLastName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCBirth",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strGenderOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strHomePhone",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOfficePhone",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOfficePhoneExt",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMobilePhone",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSSNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPhysicalAddress",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsComplete",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEmailAddress",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAlternateEmailAddress",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMiddleName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsOwner",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPhoto",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtChartLastPulled",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strExternalReferenceGUID",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PracticePayer": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PracticePayer"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PracticePayer",
                    "nillable": "true",
                    "type": "tns:BL_PracticePayer"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PracticePayer": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PracticePayer"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "eAction",
                    "type": "tns:BL_eAction"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPracticeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPayerID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCCreationDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCEffectiveFromDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCEffectiveToDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPayerGroupIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsPreferGroupIdentifier",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsAutoSubmitToSecondPayer",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsAutoSubmitToThirdPayer",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsPrintToClaimForm",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPrintClaimFontOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPreviewClaimFontOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPrintClaimTextColorOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPreviewClaimTextColorOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsPrintClaimTextUpperCase",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsPreviewClaimTextUpperCase",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_FacilityBasic": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_FacilityBasic"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_FacilityBasic",
                    "nillable": "true",
                    "type": "tns:BL_FacilityBasic"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_FacilityBasic": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_FacilityBasic"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPracticeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFacilityName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAddress1",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAddress2",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAddress3",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCity",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strState",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCounty",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCountry",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strZipCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsPrimary",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOfficePhone",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOfficeFax",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_ScheduledEventType": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_ScheduledEventType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_ScheduledEventType",
                    "nillable": "true",
                    "type": "tns:BL_ScheduledEventType"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_ScheduledEventType": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_ScheduledEventType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strTypeName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCategoryName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sDisplaySequence",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strTypeDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCategoryDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPracticeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Option": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Option"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Option",
                    "nillable": "true",
                    "type": "tns:BL_Option"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Option": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Option"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCategory",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sDisplaySequence",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsDefault",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDescription",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PlaceOfServiceType": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PlaceOfServiceType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PlaceOfServiceType",
                    "nillable": "true",
                    "type": "tns:BL_PlaceOfServiceType"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_TypeOfServiceType": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_TypeOfServiceType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_TypeOfServiceType",
                    "nillable": "true",
                    "type": "tns:BL_TypeOfServiceType"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_TypeOfServiceType": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_TypeOfServiceType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Credential": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Credential"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Credential",
                    "nillable": "true",
                    "type": "tns:BL_Credential"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Credential": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Credential"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "nUseCount",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PayerSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PayerSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PayerSummary",
                    "nillable": "true",
                    "type": "tns:BL_PayerSummary"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PayerSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PayerSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_InsurancePlan": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_InsurancePlan"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_InsurancePlan",
                    "nillable": "true",
                    "type": "tns:BL_InsurancePlan"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_InsurancePlan": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_InsurancePlan"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "eAction",
                    "type": "tns:BL_eAction"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPayerID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lContactPersonID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsuranceTypeOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsurancePaymentTypeOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dPaymentAmountAbsolute",
                    "type": "s:decimal"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sPaymentAmountPercentage",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dAnnualDeductible",
                    "type": "s:decimal"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dAnnualOutOfPocketLimit",
                    "type": "s:decimal"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dAnnualMaximum",
                    "type": "s:decimal"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dLifetimeMaximum",
                    "type": "s:decimal"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsBilledAutomatically",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsValidated",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lCreatingPracticeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_UserOperation": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_UserOperation"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_UserOperation",
                    "nillable": "true",
                    "type": "tns:BL_UserOperation"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_UserOperation": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_UserOperation"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lUserID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lUserOperationTypeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsAuthorized",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strUserOperationTypeName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCLastModified",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_UserType": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_UserType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_UserType",
                    "nillable": "true",
                    "type": "tns:BL_UserType"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_MessageType": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_MessageType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_MessageType",
                    "nillable": "true",
                    "type": "tns:BL_MessageType"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_MessageType": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_MessageType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strTypeName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bAllowCreate",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_DocumentType": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_DocumentType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_DocumentType",
                    "nillable": "true",
                    "type": "tns:BL_DocumentType"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_DocumentType": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_DocumentType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDocumentType",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_LabProfile": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_LabProfile"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bHasAgreedToEULA",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrLabAccounts",
                    "type": "tns:ArrayOfBL_LabAccount"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_LabAccount": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_LabAccount"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_LabAccount",
                    "nillable": "true",
                    "type": "tns:BL_LabAccount"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_LabAccount": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_LabAccount"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lEntityID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAccountName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLabName",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_User_Permission": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_User_Permission"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_User_Permission",
                    "nillable": "true",
                    "type": "tns:BL_User_Permission"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_User_Permission": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_User_Permission"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPermissions",
                    "type": "tns:ArrayOfBL_Permission"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lUserID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strUserName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iEditLevel",
                    "type": "s:int"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Permission": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Permission"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Permission",
                    "nillable": "true",
                    "type": "tns:BL_Permission"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Permission": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Permission"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrActions",
                    "type": "tns:ArrayOfBL_Action"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strResource",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Action": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Action"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Action",
                    "nillable": "true",
                    "type": "tns:BL_Action"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Action": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Action"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCode",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Advertisement": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Advertisement"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Advertisement",
                    "nillable": "true",
                    "type": "tns:BL_Advertisement"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Advertisement": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Advertisement"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAdLocationCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAdUrl",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_UserQuick": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_UserQuick"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lUserId",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFirstName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLastName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSuffix",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFullName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPracticeId",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lProviderId",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_SignUp": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_SignUp"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFirstName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLastName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEmail",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPhone",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSpecialtyID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bAreTermsAgreedTo",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_VendorLogo": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_VendorLogo"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_VendorLogo",
                    "nillable": "true",
                    "type": "tns:BL_VendorLogo"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_VendorLogo": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_VendorLogo"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "VendorLogoID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "VendorID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "VendorBrandID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "VendorLogoTypeID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "VendorLogoTypeUseCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "LogoFile",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "operations": {
    "GetAnnouncements": {
      "@": {
        "name": "GetAnnouncements"
      },
      "wsdl:documentation": [
        {
          "#": "Get announcements for specified target date.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetAnnouncementsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetAnnouncementsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetAnnouncements",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:GetAnnouncements",
      "outtype": "tns:GetAnnouncementsResponse"
    },
    "GetPublicAnnouncements": {
      "@": {
        "name": "GetPublicAnnouncements"
      },
      "wsdl:documentation": [
        {
          "#": "Get public announcements.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPublicAnnouncementsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPublicAnnouncementsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPublicAnnouncements",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:GetPublicAnnouncements",
      "outtype": "tns:GetPublicAnnouncementsResponse"
    },
    "LogAnnouncement": {
      "@": {
        "name": "LogAnnouncement"
      },
      "wsdl:documentation": [
        {
          "#": "Log fact that an announcement was presented to a user.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:LogAnnouncementSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:LogAnnouncementSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/LogAnnouncement",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:LogAnnouncement",
      "outtype": "tns:LogAnnouncementResponse"
    },
    "GetWebServiceInformation": {
      "@": {
        "name": "GetWebServiceInformation"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetWebServiceInformationSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetWebServiceInformationSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetWebServiceInformation",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:GetWebServiceInformation",
      "outtype": "tns:GetWebServiceInformationResponse"
    },
    "Ping": {
      "@": {
        "name": "Ping"
      },
      "wsdl:documentation": [
        {
          "#": "A test method to see if the WS is accessible. Returns useful HTTP information.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PingHttpPostIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PingHttpPostOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/Ping",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "outtype": "tns:string"
    },
    "GetUserSecurityQuestion": {
      "@": {
        "name": "GetUserSecurityQuestion"
      },
      "wsdl:documentation": [
        {
          "#": "Get security question for specified user.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetUserSecurityQuestionSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetUserSecurityQuestionSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetUserSecurityQuestion",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:GetUserSecurityQuestion",
      "outtype": "tns:GetUserSecurityQuestionResponse"
    },
    "ValidateSecurityQuestionAndAnswer": {
      "@": {
        "name": "ValidateSecurityQuestionAndAnswer"
      },
      "wsdl:documentation": [
        {
          "#": "Validate that the security answer is correct for the security question.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ValidateSecurityQuestionAndAnswerSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ValidateSecurityQuestionAndAnswerSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ValidateSecurityQuestionAndAnswer",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:ValidateSecurityQuestionAndAnswer",
      "outtype": "tns:ValidateSecurityQuestionAndAnswerResponse"
    },
    "SunriseSignup": {
      "@": {
        "name": "SunriseSignup"
      },
      "wsdl:documentation": [
        {
          "#": "Submits the user's Sunrise request form.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:SunriseSignupSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:SunriseSignupSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/SunriseSignup",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:SunriseSignup",
      "outtype": "tns:SunriseSignupResponse"
    },
    "PreLogin": {
      "@": {
        "name": "PreLogin"
      },
      "wsdl:documentation": [
        {
          "#": "Lightweight call to get info for login screen.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PreLoginSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PreLoginSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PreLogin",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:PreLogin",
      "outtype": "tns:PreLoginResponse"
    },
    "UserLogin": {
      "@": {
        "name": "UserLogin"
      },
      "wsdl:documentation": [
        {
          "#": "Log in a Practice Fusion user, returning the session object to use for all subsequent WS calls, and the UserProfile object tree.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UserLoginSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UserLoginSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UserLogin",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:UserLogin",
      "outtype": "tns:UserLoginResponse"
    },
    "UserLoginQuick": {
      "@": {
        "name": "UserLoginQuick"
      },
      "wsdl:documentation": [
        {
          "#": "Log in a Practice Fusion user, returning the session object to use for all subsequent WS calls, and the UserProfile object tree.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UserLoginQuickSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UserLoginQuickSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UserLoginQuick",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:UserLoginQuick",
      "outtype": "tns:UserLoginQuickResponse"
    },
    "UserSignup": {
      "@": {
        "name": "UserSignup"
      },
      "wsdl:documentation": [
        {
          "#": "Sign up a new Practice Fusion user, returning the session object, practice identifier, and the UserProfile object tree.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UserSignupSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UserSignupSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UserSignup",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:UserSignup",
      "outtype": "tns:UserSignupResponse"
    },
    "AreNewUserSignupsEnabled": {
      "@": {
        "name": "AreNewUserSignupsEnabled"
      },
      "wsdl:documentation": [
        {
          "#": "Determines if the system is allowing new users to sign up.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:AreNewUserSignupsEnabledSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:AreNewUserSignupsEnabledSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/AreNewUserSignupsEnabled",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:AreNewUserSignupsEnabled",
      "outtype": "tns:AreNewUserSignupsEnabledResponse"
    },
    "ScreenUnlock": {
      "@": {
        "name": "ScreenUnlock"
      },
      "wsdl:documentation": [
        {
          "#": "User unlocks EHR lock screen.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ScreenUnlockSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ScreenUnlockSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ScreenUnlock",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:ScreenUnlock",
      "outtype": "tns:ScreenUnlockResponse"
    },
    "UserAcceptLicenseAgreement": {
      "@": {
        "name": "UserAcceptLicenseAgreement"
      },
      "wsdl:documentation": [
        {
          "#": "Notify that the user has accepted the Practice Fusion license agreement.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UserAcceptLicenseAgreementSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UserAcceptLicenseAgreementSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UserAcceptLicenseAgreement",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:UserAcceptLicenseAgreement",
      "outtype": "tns:UserAcceptLicenseAgreementResponse"
    },
    "UserChangePassword": {
      "@": {
        "name": "UserChangePassword"
      },
      "wsdl:documentation": [
        {
          "#": "Change the user's password.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UserChangePasswordSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UserChangePasswordSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UserChangePassword",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:UserChangePassword",
      "outtype": "tns:UserChangePasswordResponse"
    },
    "UserLogout": {
      "@": {
        "name": "UserLogout"
      },
      "wsdl:documentation": [
        {
          "#": "Log out a user explicity, specifying the reason for the UI event (user request, inactivity timeout, etc.).",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UserLogoutSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UserLogoutSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UserLogout",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:UserLogout",
      "outtype": "tns:UserLogoutResponse"
    },
    "GetVendorLogoByPartner": {
      "@": {
        "name": "GetVendorLogoByPartner"
      },
      "wsdl:documentation": [
        {
          "#": "Get logo files for specified partner code.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetVendorLogoByPartnerSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetVendorLogoByPartnerSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetVendorLogoByPartner",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:GetVendorLogoByPartner",
      "outtype": "tns:GetVendorLogoByPartnerResponse"
    },
    "GetVendorLogoByUser": {
      "@": {
        "name": "GetVendorLogoByUser"
      },
      "wsdl:documentation": [
        {
          "#": "Get logo files for specified partner code.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetVendorLogoByUserSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetVendorLogoByUserSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetVendorLogoByUser",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
      "intype": "tns:GetVendorLogoByUser",
      "outtype": "tns:GetVendorLogoByUserResponse"
    }
  },
  "services": {
    "tns:PracticeManagementSoap": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
    "tns:PracticeManagementSoap12": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
    "tns:PracticeManagementHttpGet": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx",
    "tns:PracticeManagementHttpPost": "https://pfws.practicefusion.com/emr/2.0.45.1/PracticeManagement.asmx"
  },
  "messages": {
    "GetAnnouncementsSoapIn": "tns:GetAnnouncements",
    "GetAnnouncementsSoapOut": "tns:GetAnnouncementsResponse",
    "GetPublicAnnouncementsSoapIn": "tns:GetPublicAnnouncements",
    "GetPublicAnnouncementsSoapOut": "tns:GetPublicAnnouncementsResponse",
    "LogAnnouncementSoapIn": "tns:LogAnnouncement",
    "LogAnnouncementSoapOut": "tns:LogAnnouncementResponse",
    "GetWebServiceInformationSoapIn": "tns:GetWebServiceInformation",
    "GetWebServiceInformationSoapOut": "tns:GetWebServiceInformationResponse",
    "PingSoapIn": "tns:Ping",
    "PingSoapOut": "tns:PingResponse",
    "GetUserSecurityQuestionSoapIn": "tns:GetUserSecurityQuestion",
    "GetUserSecurityQuestionSoapOut": "tns:GetUserSecurityQuestionResponse",
    "ValidateSecurityQuestionAndAnswerSoapIn": "tns:ValidateSecurityQuestionAndAnswer",
    "ValidateSecurityQuestionAndAnswerSoapOut": "tns:ValidateSecurityQuestionAndAnswerResponse",
    "SunriseSignupSoapIn": "tns:SunriseSignup",
    "SunriseSignupSoapOut": "tns:SunriseSignupResponse",
    "PreLoginSoapIn": "tns:PreLogin",
    "PreLoginSoapOut": "tns:PreLoginResponse",
    "UserLoginSoapIn": "tns:UserLogin",
    "UserLoginSoapOut": "tns:UserLoginResponse",
    "UserLoginQuickSoapIn": "tns:UserLoginQuick",
    "UserLoginQuickSoapOut": "tns:UserLoginQuickResponse",
    "UserSignupSoapIn": "tns:UserSignup",
    "UserSignupSoapOut": "tns:UserSignupResponse",
    "AreNewUserSignupsEnabledSoapIn": "tns:AreNewUserSignupsEnabled",
    "AreNewUserSignupsEnabledSoapOut": "tns:AreNewUserSignupsEnabledResponse",
    "ScreenUnlockSoapIn": "tns:ScreenUnlock",
    "ScreenUnlockSoapOut": "tns:ScreenUnlockResponse",
    "UserAcceptLicenseAgreementSoapIn": "tns:UserAcceptLicenseAgreement",
    "UserAcceptLicenseAgreementSoapOut": "tns:UserAcceptLicenseAgreementResponse",
    "UserChangePasswordSoapIn": "tns:UserChangePassword",
    "UserChangePasswordSoapOut": "tns:UserChangePasswordResponse",
    "UserLogoutSoapIn": "tns:UserLogout",
    "UserLogoutSoapOut": "tns:UserLogoutResponse",
    "GetVendorLogoByPartnerSoapIn": "tns:GetVendorLogoByPartner",
    "GetVendorLogoByPartnerSoapOut": "tns:GetVendorLogoByPartnerResponse",
    "GetVendorLogoByUserSoapIn": "tns:GetVendorLogoByUser",
    "GetVendorLogoByUserSoapOut": "tns:GetVendorLogoByUserResponse",
    "PingHttpGetOut": "tns:string",
    "PingHttpPostOut": "tns:string"
  }
}
WSDL_Interface.add("PracticeManagement", PracticeManagement);
}());
