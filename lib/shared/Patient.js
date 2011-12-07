(function() {
if (typeof exports !== "undefined") {
    WSDL_Interface = require("shared/pf_wsdl").WSDL_Interface;
}
var Patient = {};
Patient.wsdl = {
  "types": {
    "PatientGetByID": {
      "s:element": [
        {
          "@": {
            "name": "PatientGetByID"
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
                        "name": "i_lPatientID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPracticeID",
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
    "PatientGetByIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientGetByIDResponse"
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
                        "name": "PatientGetByIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Patient",
                        "type": "tns:BL_Patient"
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
    "SearchPracticeForPatient": {
      "s:element": [
        {
          "@": {
            "name": "SearchPracticeForPatient"
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
                        "name": "i_lPracticeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strFirstNameMatch",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strLastNameMatch",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_sBirthYear",
                        "type": "s:short"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_sBirthMonth",
                        "type": "s:short"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_sBirthDay",
                        "type": "s:short"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strPatientIdentifier",
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
    "SearchPracticeForPatientResponse": {
      "s:element": [
        {
          "@": {
            "name": "SearchPracticeForPatientResponse"
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
                        "name": "SearchPracticeForPatientResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientSummary",
                        "type": "tns:ArrayOfBL_PatientSummary"
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
    "PatientSummaryGetByPatientID": {
      "s:element": [
        {
          "@": {
            "name": "PatientSummaryGetByPatientID"
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
                        "name": "i_lPracticeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPatientID",
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
    "PatientSummaryGetByPatientIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientSummaryGetByPatientIDResponse"
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
                        "name": "PatientSummaryGetByPatientIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientSummary",
                        "type": "tns:ArrayOfBL_PatientSummary"
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
    "PatientBasicGetByPatientID": {
      "s:element": [
        {
          "@": {
            "name": "PatientBasicGetByPatientID"
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
                        "name": "i_lPracticeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPatientID",
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
    "PatientBasicGetByPatientIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientBasicGetByPatientIDResponse"
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
                        "name": "PatientBasicGetByPatientIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientBasic",
                        "type": "tns:BL_PatientBasic"
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
    "PatientInsertBasic": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsertBasic"
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
                        "name": "i_bAutogeneratePatientIdentifier",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientBasic",
                        "type": "tns:BL_PatientBasic"
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
    "PatientInsertBasicResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsertBasicResponse"
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
                        "name": "PatientInsertBasicResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientBasic",
                        "type": "tns:BL_PatientBasic"
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
    "PatientUpdateBasic": {
      "s:element": [
        {
          "@": {
            "name": "PatientUpdateBasic"
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
                        "name": "i_bAutogeneratePatientIdentifier",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientBasic",
                        "type": "tns:BL_PatientBasic"
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
    "PatientUpdateBasicResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientUpdateBasicResponse"
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
                        "name": "PatientUpdateBasicResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientBasic",
                        "type": "tns:BL_PatientBasic"
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
    "PatientAddressGetByPatientID": {
      "s:element": [
        {
          "@": {
            "name": "PatientAddressGetByPatientID"
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
                        "name": "i_lPracticeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPatientID",
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
    "PatientAddressGetByPatientIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientAddressGetByPatientIDResponse"
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
                        "name": "PatientAddressGetByPatientIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientAddress",
                        "type": "tns:BL_PatientAddress"
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
    "PatientUpdateAddress": {
      "s:element": [
        {
          "@": {
            "name": "PatientUpdateAddress"
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
                        "name": "io_PatientAddress",
                        "type": "tns:BL_PatientAddress"
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
    "PatientUpdateAddressResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientUpdateAddressResponse"
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
                        "name": "PatientUpdateAddressResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientAddress",
                        "type": "tns:BL_PatientAddress"
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
    "PatientScheduleGetByPatientID": {
      "s:element": [
        {
          "@": {
            "name": "PatientScheduleGetByPatientID"
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
                        "name": "i_lPracticeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPatientID",
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
    "PatientScheduleGetByPatientIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientScheduleGetByPatientIDResponse"
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
                        "name": "PatientScheduleGetByPatientIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientSchedule",
                        "type": "tns:ArrayOfBL_PatientScheduleSummary"
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
    "PatientDeleteAllFakePatients": {
      "s:element": [
        {
          "@": {
            "name": "PatientDeleteAllFakePatients"
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
                        "name": "i_lPracticeID",
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
    "PatientDeleteAllFakePatientsResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientDeleteAllFakePatientsResponse"
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
                        "name": "PatientDeleteAllFakePatientsResult",
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
    "GetRaces": {
      "s:element": [
        {
          "@": {
            "name": "GetRaces"
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
    "GetRacesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetRacesResponse"
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
                        "name": "GetRacesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrRace",
                        "type": "tns:ArrayOfBL_Race"
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
    "GetEthnicities": {
      "s:element": [
        {
          "@": {
            "name": "GetEthnicities"
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
    "GetEthnicitiesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetEthnicitiesResponse"
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
                        "name": "GetEthnicitiesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrEthnicity",
                        "type": "tns:ArrayOfBL_Ethnicity"
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
    "GetPreferredMethodsOfCommunication": {
      "s:element": [
        {
          "@": {
            "name": "GetPreferredMethodsOfCommunication"
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
    "GetPreferredMethodsOfCommunicationResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPreferredMethodsOfCommunicationResponse"
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
                        "name": "GetPreferredMethodsOfCommunicationResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPreferredMethodOfCommunication",
                        "type": "tns:ArrayOfBL_PreferredMethodOfCommunication"
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
    "GetAllLanguages": {
      "s:element": [
        {
          "@": {
            "name": "GetAllLanguages"
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
    "GetAllLanguagesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetAllLanguagesResponse"
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
                        "name": "GetAllLanguagesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrLanguage",
                        "type": "tns:ArrayOfBL_Language"
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
    "GetMostCommonLanguages": {
      "s:element": [
        {
          "@": {
            "name": "GetMostCommonLanguages"
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
    "GetMostCommonLanguagesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetMostCommonLanguagesResponse"
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
                        "name": "GetMostCommonLanguagesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrLanguage",
                        "type": "tns:ArrayOfBL_Language"
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
    "PatientInsurancePlanSummaryGetAllByPatientID": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsurancePlanSummaryGetAllByPatientID"
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
                        "name": "i_lPatientID",
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
    "PatientInsurancePlanSummaryGetAllByPatientIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsurancePlanSummaryGetAllByPatientIDResponse"
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
                        "name": "PatientInsurancePlanSummaryGetAllByPatientIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientInsurancePlanSummarys",
                        "type": "tns:ArrayOfBL_PatientInsurancePlanSummary"
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
    "PatientInsurancePlanBasicGetByPatientInsurancePlanID": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsurancePlanBasicGetByPatientInsurancePlanID"
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
                        "name": "i_lPatientInsurancePlanID",
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
    "PatientInsurancePlanBasicGetByPatientInsurancePlanIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsurancePlanBasicGetByPatientInsurancePlanIDResponse"
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
                        "name": "PatientInsurancePlanBasicGetByPatientInsurancePlanIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientInsurancePlanBasic",
                        "type": "tns:BL_PatientInsurancePlanBasic"
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
    "PatientInsurancePlanInsert": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsurancePlanInsert"
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
                        "name": "io_PatientInsurancePlanBasic",
                        "type": "tns:BL_PatientInsurancePlanBasic"
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
    "PatientInsurancePlanInsertResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsurancePlanInsertResponse"
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
                        "name": "PatientInsurancePlanInsertResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientInsurancePlanBasic",
                        "type": "tns:BL_PatientInsurancePlanBasic"
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
    "PatientInsurancePlanUpdate": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsurancePlanUpdate"
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
                        "name": "io_PatientInsurancePlanBasic",
                        "type": "tns:BL_PatientInsurancePlanBasic"
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
    "PatientInsurancePlanUpdateResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientInsurancePlanUpdateResponse"
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
                        "name": "PatientInsurancePlanUpdateResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientInsurancePlanBasic",
                        "type": "tns:BL_PatientInsurancePlanBasic"
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
    "PatientAppointmentReminderStatusGet": {
      "s:element": [
        {
          "@": {
            "name": "PatientAppointmentReminderStatusGet"
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
                        "name": "i_lPatientID",
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
    "PatientAppointmentReminderStatusGetResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientAppointmentReminderStatusGetResponse"
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
                        "name": "PatientAppointmentReminderStatusGetResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "areRemindersEnabled",
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
    "PatientAppointmentReminderStatusSet": {
      "s:element": [
        {
          "@": {
            "name": "PatientAppointmentReminderStatusSet"
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
                        "name": "i_lPatientID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "areRemindersEnabled",
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
    "PatientAppointmentReminderStatusSetResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientAppointmentReminderStatusSetResponse"
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
                        "name": "PatientAppointmentReminderStatusSetResult",
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
    "PatientPMHRetrieve": {
      "s:element": [
        {
          "@": {
            "name": "PatientPMHRetrieve"
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
                        "name": "i_lPatientID",
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
    "PatientPMHRetrieveResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientPMHRetrieveResponse"
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
                        "name": "PatientPMHRetrieveResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientPMH",
                        "type": "tns:ArrayOfBL_PatientPMH"
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
    "PatientPMHUpdate": {
      "s:element": [
        {
          "@": {
            "name": "PatientPMHUpdate"
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
                        "name": "io_PatientPMH",
                        "type": "tns:BL_PatientPMH"
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
    "PatientPMHUpdateResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientPMHUpdateResponse"
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
                        "name": "PatientPMHUpdateResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientPMH",
                        "type": "tns:BL_PatientPMH"
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
    "PatientAdvancedDirectiveGetAllByPatientID": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveGetAllByPatientID"
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
                        "name": "i_lPatientID",
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
    "PatientAdvancedDirectiveGetAllByPatientIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveGetAllByPatientIDResponse"
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
                        "name": "PatientAdvancedDirectiveGetAllByPatientIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientAdvancedDirectives",
                        "type": "tns:ArrayOfBL_PatientAdvancedDirective"
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
    "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveID": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveID"
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
                        "name": "i_lPatientAdvancedDirectiveID",
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
    "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDResponse"
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
                        "name": "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientAdvancedDirective",
                        "type": "tns:BL_PatientAdvancedDirective"
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
    "PatientAdvancedDirectiveInsert": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveInsert"
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
                        "name": "io_PatientAdvancedDirective",
                        "type": "tns:BL_PatientAdvancedDirective"
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
    "PatientAdvancedDirectiveInsertResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveInsertResponse"
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
                        "name": "PatientAdvancedDirectiveInsertResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientAdvancedDirective",
                        "type": "tns:BL_PatientAdvancedDirective"
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
    "PatientAdvancedDirectiveUpdate": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveUpdate"
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
                        "name": "io_PatientAdvancedDirective",
                        "type": "tns:BL_PatientAdvancedDirective"
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
    "PatientAdvancedDirectiveUpdateResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveUpdateResponse"
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
                        "name": "PatientAdvancedDirectiveUpdateResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientAdvancedDirective",
                        "type": "tns:BL_PatientAdvancedDirective"
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
    "PatientAdvancedDirectiveDelete": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveDelete"
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
                        "name": "io_PatientAdvancedDirective",
                        "type": "tns:BL_PatientAdvancedDirective"
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
    "PatientAdvancedDirectiveDeleteResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientAdvancedDirectiveDeleteResponse"
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
                        "name": "PatientAdvancedDirectiveDeleteResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientAdvancedDirective",
                        "type": "tns:BL_PatientAdvancedDirective"
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
    "PatientImmunizationGetAllByPatientID": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationGetAllByPatientID"
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
                        "name": "i_lPatientID",
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
    "PatientImmunizationGetAllByPatientIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationGetAllByPatientIDResponse"
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
                        "name": "PatientImmunizationGetAllByPatientIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientImmunizations",
                        "type": "tns:ArrayOfBL_PatientImmunization"
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
    "PatientImmunizationGetByPatientImmunizationID": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationGetByPatientImmunizationID"
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
                        "name": "i_lPatientImmunizationID",
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
    "PatientImmunizationGetByPatientImmunizationIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationGetByPatientImmunizationIDResponse"
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
                        "name": "PatientImmunizationGetByPatientImmunizationIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientImmunization",
                        "type": "tns:BL_PatientImmunization"
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
    "PatientImmunizationInsert": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationInsert"
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
                        "name": "io_PatientImmunization",
                        "type": "tns:BL_PatientImmunization"
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
    "PatientImmunizationInsertResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationInsertResponse"
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
                        "name": "PatientImmunizationInsertResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientImmunization",
                        "type": "tns:BL_PatientImmunization"
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
    "PatientImmunizationUpdate": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationUpdate"
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
                        "name": "io_PatientImmunization",
                        "type": "tns:BL_PatientImmunization"
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
    "PatientImmunizationUpdateResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationUpdateResponse"
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
                        "name": "PatientImmunizationUpdateResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientImmunization",
                        "type": "tns:BL_PatientImmunization"
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
    "PatientImmunizationDelete": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationDelete"
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
                        "name": "io_PatientImmunization",
                        "type": "tns:BL_PatientImmunization"
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
    "PatientImmunizationDeleteResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientImmunizationDeleteResponse"
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
                        "name": "PatientImmunizationDeleteResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientImmunization",
                        "type": "tns:BL_PatientImmunization"
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
    "PatientUpdateNoKnownStatus": {
      "s:element": [
        {
          "@": {
            "name": "PatientUpdateNoKnownStatus"
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
                        "name": "i_lPatientID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_NoKnownType",
                        "type": "tns:NoKnownStatusType"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_bNoKnownStatus",
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
    "PatientUpdateNoKnownStatusResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientUpdateNoKnownStatusResponse"
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
                        "name": "PatientUpdateNoKnownStatusResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bSuccess",
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
    "ChartAccessGetByPatientID": {
      "s:element": [
        {
          "@": {
            "name": "ChartAccessGetByPatientID"
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
                        "name": "i_lPatientID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_dtAsOfUTCDateTime",
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
    "ChartAccessGetByPatientIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "ChartAccessGetByPatientIDResponse"
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
                        "name": "ChartAccessGetByPatientIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrChartAccess",
                        "type": "tns:ArrayOfBL_ChartAccess"
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
    "GetSmokingStatuses": {
      "s:element": [
        {
          "@": {
            "name": "GetSmokingStatuses"
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
    "GetSmokingStatusesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetSmokingStatusesResponse"
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
                        "name": "GetSmokingStatusesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrSmokingStatuses",
                        "type": "tns:ArrayOfBL_SmokingStatus"
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
    "GetPatientSmokingHistory": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientSmokingHistory"
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
                        "name": "i_lPatientID",
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
    "GetPatientSmokingHistoryResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientSmokingHistoryResponse"
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
                        "name": "GetPatientSmokingHistoryResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientSmokingHistory",
                        "type": "tns:BL_PatientSmokingHistory"
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
    "SavePatientSmokingStatus": {
      "s:element": [
        {
          "@": {
            "name": "SavePatientSmokingStatus"
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
                        "name": "i_PatientSmokingStatus",
                        "type": "tns:BL_PatientSmokingStatus"
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
    "SavePatientSmokingStatusResponse": {
      "s:element": [
        {
          "@": {
            "name": "SavePatientSmokingStatusResponse"
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
                        "name": "SavePatientSmokingStatusResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_newPatientSmokingStatus",
                        "type": "tns:BL_PatientSmokingStatus"
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
    "PatientBasicGetBySearchCriteria": {
      "s:element": [
        {
          "@": {
            "name": "PatientBasicGetBySearchCriteria"
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
                        "name": "i_lPracticeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_eGenderType",
                        "type": "tns:GenderType"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPreferredLanguageID",
                        "nillable": "true",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lEthnicityID",
                        "nillable": "true",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_iAgeRangeMinimum",
                        "nillable": "true",
                        "type": "s:int"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_iAgeRangeMaximum",
                        "nillable": "true",
                        "type": "s:int"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrRaceIDs",
                        "type": "tns:ArrayOfInt"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrAllergyProductCodes",
                        "type": "tns:ArrayOfString"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrDiagnosisTypeIDs",
                        "type": "tns:ArrayOfLong"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrMedicationProductCodes",
                        "type": "tns:ArrayOfString"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrLabObservationSearchCriteria",
                        "type": "tns:ArrayOfBL_LabObservationSearchCriterion"
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
    "PatientBasicGetBySearchCriteriaResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientBasicGetBySearchCriteriaResponse"
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
                        "name": "PatientBasicGetBySearchCriteriaResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bTooManyRecordsReturned",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientListItems",
                        "type": "tns:ArrayOfBL_PatientListItem"
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
    "GetPatientImmunizationRegistry": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientImmunizationRegistry"
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
                        "name": "i_lPracticeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPatientID",
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
    "GetPatientImmunizationRegistryResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientImmunizationRegistryResponse"
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
                        "name": "GetPatientImmunizationRegistryResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strPatientImmunizationRegistry",
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
    "GetPatientHealthSurveillance": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientHealthSurveillance"
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
                        "name": "i_lPracticeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPatientID",
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
    "GetPatientHealthSurveillanceResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientHealthSurveillanceResponse"
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
                        "name": "GetPatientHealthSurveillanceResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strPatientHealthSurveillance",
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
    "PatientListExported": {
      "s:element": [
        {
          "@": {
            "name": "PatientListExported"
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
                        "name": "i_lPracticeID",
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
    "PatientListExportedResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientListExportedResponse"
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
                        "name": "PatientListExportedResult",
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
    "PatientEducationActionPerformed": {
      "s:element": [
        {
          "@": {
            "name": "PatientEducationActionPerformed"
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
                        "name": "i_lPatientID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lSearchTypeID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strSearchCode",
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
    "PatientEducationActionPerformedResponse": {
      "s:element": [
        {
          "@": {
            "name": "PatientEducationActionPerformedResponse"
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
                        "name": "PatientEducationActionPerformedResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strSearchTerm",
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
    "NoKnownStatusType": {
      "s:simpleType": [
        {
          "@": {
            "name": "NoKnownStatusType"
          },
          "s:restriction": [
            {
              "@": {
                "base": "s:string"
              },
              "s:enumeration": [
                {
                  "@": {
                    "value": "NoKnownAllergies"
                  }
                },
                {
                  "@": {
                    "value": "NoKnownDiagnoses"
                  }
                },
                {
                  "@": {
                    "value": "NoKnownMedications"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "GenderType": {
      "s:simpleType": [
        {
          "@": {
            "name": "GenderType"
          },
          "s:restriction": [
            {
              "@": {
                "base": "s:string"
              },
              "s:enumeration": [
                {
                  "@": {
                    "value": "Unspecified"
                  }
                },
                {
                  "@": {
                    "value": "Male"
                  }
                },
                {
                  "@": {
                    "value": "Female"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "LoincCompareOperator": {
      "s:simpleType": [
        {
          "@": {
            "name": "LoincCompareOperator"
          },
          "s:restriction": [
            {
              "@": {
                "base": "s:string"
              },
              "s:enumeration": [
                {
                  "@": {
                    "value": "Equals"
                  }
                },
                {
                  "@": {
                    "value": "LessThan"
                  }
                },
                {
                  "@": {
                    "value": "LessThanEqual"
                  }
                },
                {
                  "@": {
                    "value": "GreaterThan"
                  }
                },
                {
                  "@": {
                    "value": "GreaterThanEqual"
                  }
                },
                {
                  "@": {
                    "value": "NotEqual"
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
    "s:short": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:short"
          }
        }
      ]
    },
    "s:decimal": {
      "s:simpleType": [
        {
          "@": {
            "name": "s:decimal"
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
    "BL_Patient": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Patient"
          },
          "s:sequence": [
            {
              "s:element": [
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
                    "name": "strIdentifier",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPatientAccountNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCPracticeJoinDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bPatientPracticeIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCInactiveDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInactiveReasonOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bPatientPracticeIsOwner",
                    "type": "s:boolean"
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
                    "name": "EmergencyContactPerson",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEmergencyContactRelationshipOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bEmergencyContactLegalRep",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "OtherContactPerson",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOtherContactRelationshipOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bOtherContactLegalRep",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsPatientGuarantor",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsPatientAddressGuarantorAddress",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "GuarantorPerson",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCSignatureDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCPrivacyNoticeSignatureDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCHIPAASignatureDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sBirthSequence",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsMultipleBirth",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strOccupationStatusOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strComments",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtUTCDeath",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bPatientIsActive",
                    "type": "s:boolean"
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
                    "name": "arrPatientInsurancePlan",
                    "type": "tns:ArrayOfBL_PatientInsurancePlan"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strExternalReferenceGUID",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPreferredMethodOfCommunicationID",
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
    "ArrayOfBL_PatientInsurancePlan": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientInsurancePlan"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientInsurancePlan",
                    "nillable": "true",
                    "type": "tns:BL_PatientInsurancePlan"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientInsurancePlan": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientInsurancePlan"
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
                    "name": "lPatientID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsSelfInsurance",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lInsurancePlanID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsuredRelationshipTypeOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtCreationDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsuredIDNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strGroupNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsuranceSequenceOption",
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
                    "name": "dtInactiveDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtEffectiveFromDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtEffectiveToDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPrimaryCarePhysicianID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lReferringProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "PolicyHolderPerson",
                    "type": "tns:BL_Person"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtSignatureOnFileDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsBillAutomatically",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strNameOfEmployer",
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
    "BL_PatientBasic": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientBasic"
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
                    "name": "strFirstName",
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
                    "name": "strSex",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtDateOfBirth",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtDateOfDeath",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSSN",
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
                    "name": "strHomePhone",
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
                    "name": "strComments",
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
                    "name": "strExternalReferenceGUID",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPreferredMethodOfCommunicationID",
                    "type": "s:long"
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
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bNoKnownMedications",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bNoKnownDiagnoses",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bNoKnownAllergies",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientAddress": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientAddress"
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
                    "name": "strZipCode",
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
    "ArrayOfBL_PatientScheduleSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientScheduleSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientScheduleSummary",
                    "nillable": "true",
                    "type": "tns:BL_PatientScheduleSummary"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientScheduleSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientScheduleSummary"
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
                    "name": "startDateTimeUTC",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "endDateTimeUTC",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStatus",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lTranscriptID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Ethnicity": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Ethnicity"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Ethnicity",
                    "nillable": "true",
                    "type": "tns:BL_Ethnicity"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Ethnicity": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Ethnicity"
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
                    "name": "strEthnicityName",
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
    "ArrayOfBL_PreferredMethodOfCommunication": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PreferredMethodOfCommunication"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PreferredMethodOfCommunication",
                    "nillable": "true",
                    "type": "tns:BL_PreferredMethodOfCommunication"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PreferredMethodOfCommunication": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PreferredMethodOfCommunication"
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
                    "name": "strMethodName",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Language": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Language"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Language",
                    "nillable": "true",
                    "type": "tns:BL_Language"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Language": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Language"
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
                    "name": "strLanguageName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPUMSCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsAmongMostCommon",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PatientInsurancePlanSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientInsurancePlanSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientInsurancePlanSummary",
                    "nillable": "true",
                    "type": "tns:BL_PatientInsurancePlanSummary"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientInsurancePlanSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientInsurancePlanSummary"
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
                    "name": "strInsurancePlanName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsurancePlanType",
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
                    "name": "strPriority",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtEffectiveStartDate",
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
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsurancePaymentTypeOption",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsuredIDNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtEffectiveEndDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strGroupNumber",
                    "type": "s:string"
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
                    "name": "dPaymentAmountAbsolute",
                    "type": "s:decimal"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientInsurancePlanBasic": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientInsurancePlanBasic"
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
                    "name": "lPatientID",
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
                    "name": "strInsurancePlanName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsurancePlanType",
                    "type": "s:string"
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
                    "name": "strPriority",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strRelationshipToInsured",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsuredIDNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strGroupNumber",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strEmployerName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strInsurancePaymentType",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sPaymentType",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dPaymentAmount",
                    "type": "s:decimal"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "sPaymentPercentage",
                    "type": "s:short"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtEffectiveStartDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtEffectiveEndDate",
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
                    "name": "lGuarantorID",
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
    "ArrayOfBL_PatientPMH": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientPMH"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientPMH",
                    "nillable": "true",
                    "type": "tns:BL_PatientPMH"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientPMH": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientPMH"
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
                    "name": "lPatientID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iPMHTypeID",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strText",
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
    "ArrayOfBL_PatientAdvancedDirective": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientAdvancedDirective"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientAdvancedDirective",
                    "nillable": "true",
                    "type": "tns:BL_PatientAdvancedDirective"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientAdvancedDirective": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientAdvancedDirective"
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
                    "name": "lPatientID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtDateOfService",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAdvancedDirective",
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
    "ArrayOfBL_PatientImmunization": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientImmunization"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientImmunization",
                    "nillable": "true",
                    "type": "tns:BL_PatientImmunization"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientImmunization": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientImmunization"
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
                    "name": "lPatientID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lVaccineID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtDateAdministered",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strComments",
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
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "fAdministeredAmount",
                    "type": "s:double"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAdministeredUnits",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_ChartAccess": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_ChartAccess"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_ChartAccess",
                    "nillable": "true",
                    "type": "tns:BL_ChartAccess"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_ChartAccess": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_ChartAccess"
          },
          "s:sequence": [
            {
              "s:element": [
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
                    "name": "lProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPatientID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAccessedPracticeName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAccessedProviderName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAccessedFromIP",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtAccessedAtUTC",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_SmokingStatus": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_SmokingStatus"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_SmokingStatus",
                    "nillable": "true",
                    "type": "tns:BL_SmokingStatus"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_SmokingStatus": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_SmokingStatus"
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
                    "name": "strDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iNISTcode",
                    "type": "s:int"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientSmokingHistory": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientSmokingHistory"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPatientID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPatientSmokingStatuses",
                    "type": "tns:ArrayOfBL_PatientSmokingStatus"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iPackYears",
                    "type": "s:int"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PatientSmokingStatus": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientSmokingStatus"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientSmokingStatus",
                    "nillable": "true",
                    "type": "tns:BL_PatientSmokingStatus"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientSmokingStatus": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientSmokingStatus"
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
                    "name": "lPatientID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lTranscriptID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSmokingStatusID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtEffectiveDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bDeleted",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfInt": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfInt"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "int",
                    "type": "s:int"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfString": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfString"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "string",
                    "nillable": "true",
                    "type": "s:string"
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
    "ArrayOfBL_LabObservationSearchCriterion": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_LabObservationSearchCriterion"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_LabObservationSearchCriterion",
                    "nillable": "true",
                    "type": "tns:BL_LabObservationSearchCriterion"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_LabObservationSearchCriterion": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_LabObservationSearchCriterion"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lLoincCategoryID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "eLoincCompareOperator",
                    "type": "tns:LoincCompareOperator"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dLoincComparisonValue",
                    "type": "s:decimal"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PatientListItem": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientListItem"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientListItem",
                    "nillable": "true",
                    "type": "tns:BL_PatientListItem"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientListItem": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientListItem"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "oPatientBasic",
                    "type": "tns:BL_PatientBasic"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "oAddress",
                    "type": "tns:BL_Address"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "oDiagnoses",
                    "type": "tns:ArrayOfBL_Diagnosis"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "oMedications",
                    "type": "tns:ArrayOfBL_Medication"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "oAllergyMedications",
                    "type": "tns:ArrayOfBL_Medication"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "oLabObservations",
                    "type": "tns:ArrayOfBL_LabObservation"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Diagnosis": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Diagnosis"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Diagnosis",
                    "nillable": "true",
                    "type": "tns:BL_Diagnosis"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Diagnosis": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Diagnosis"
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
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Medication": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Medication"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Medication",
                    "nillable": "true",
                    "type": "tns:BL_Medication"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_Medication": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Medication"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iDrugSubsystemID",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDrugCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strBrandName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDrugName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strProductStrengthDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strRouteDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDoseFormDescription",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsGeneric",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsOverTheCounter",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strControlledSubstanceSchedule",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsMedicalSupply",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_LabObservation": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_LabObservation"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_LabObservation",
                    "nillable": "true",
                    "type": "tns:BL_LabObservation"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_LabObservation": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_LabObservation"
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
                    "name": "lLabPanelID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLocalCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLocalName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLOINCCode",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLOINCName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strUnits",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strReferenceRange",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsAbnormal",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strFlags",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strTestResultStatus",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtObservationDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLabObserver",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strValue",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strLabIndex",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrNotes",
                    "type": "tns:ArrayOfBL_LabObservationNote"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_LabObservationNote": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_LabObservationNote"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_LabObservationNote",
                    "nillable": "true",
                    "type": "tns:BL_LabObservationNote"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_LabObservationNote": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_LabObservationNote"
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
                    "name": "lLabObservationID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSequence",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "str64Comment",
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
    "PatientGetByID": {
      "@": {
        "name": "PatientGetByID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a whole BL_Patient business object tree, given the Patient and Practice IDs.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientGetByIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientGetByIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientGetByID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientGetByID",
      "outtype": "tns:PatientGetByIDResponse"
    },
    "SearchPracticeForPatient": {
      "@": {
        "name": "SearchPracticeForPatient"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_PatientSummary objects, given a Practice ID and other filters.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:SearchPracticeForPatientSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:SearchPracticeForPatientSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/SearchPracticeForPatient",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:SearchPracticeForPatient",
      "outtype": "tns:SearchPracticeForPatientResponse"
    },
    "PatientSummaryGetByPatientID": {
      "@": {
        "name": "PatientSummaryGetByPatientID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_PatientSummary objects, given a Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientSummaryGetByPatientIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientSummaryGetByPatientIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientSummaryGetByPatientID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientSummaryGetByPatientID",
      "outtype": "tns:PatientSummaryGetByPatientIDResponse"
    },
    "PatientBasicGetByPatientID": {
      "@": {
        "name": "PatientBasicGetByPatientID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientBasic object for the corresponding Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientBasicGetByPatientIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientBasicGetByPatientIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientBasicGetByPatientID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientBasicGetByPatientID",
      "outtype": "tns:PatientBasicGetByPatientIDResponse"
    },
    "PatientInsertBasic": {
      "@": {
        "name": "PatientInsertBasic"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a Patient's basic attributes.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientInsertBasicSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientInsertBasicSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientInsertBasic",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientInsertBasic",
      "outtype": "tns:PatientInsertBasicResponse"
    },
    "PatientUpdateBasic": {
      "@": {
        "name": "PatientUpdateBasic"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a Patient's basic attributes.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientUpdateBasicSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientUpdateBasicSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientUpdateBasic",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientUpdateBasic",
      "outtype": "tns:PatientUpdateBasicResponse"
    },
    "PatientAddressGetByPatientID": {
      "@": {
        "name": "PatientAddressGetByPatientID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientAddress object for the corresponding Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientAddressGetByPatientIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientAddressGetByPatientIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientAddressGetByPatientID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientAddressGetByPatientID",
      "outtype": "tns:PatientAddressGetByPatientIDResponse"
    },
    "PatientUpdateAddress": {
      "@": {
        "name": "PatientUpdateAddress"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a Patient's address attributes.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientUpdateAddressSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientUpdateAddressSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientUpdateAddress",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientUpdateAddress",
      "outtype": "tns:PatientUpdateAddressResponse"
    },
    "PatientScheduleGetByPatientID": {
      "@": {
        "name": "PatientScheduleGetByPatientID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientScheduleSummary array object for the corresponding Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientScheduleGetByPatientIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientScheduleGetByPatientIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientScheduleGetByPatientID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientScheduleGetByPatientID",
      "outtype": "tns:PatientScheduleGetByPatientIDResponse"
    },
    "PatientDeleteAllFakePatients": {
      "@": {
        "name": "PatientDeleteAllFakePatients"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientDeleteAllFakePatientsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientDeleteAllFakePatientsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientDeleteAllFakePatients",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientDeleteAllFakePatients",
      "outtype": "tns:PatientDeleteAllFakePatientsResponse"
    },
    "GetRaces": {
      "@": {
        "name": "GetRaces"
      },
      "wsdl:documentation": [
        {
          "#": "Gets the list of Races",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetRacesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetRacesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetRaces",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetRaces",
      "outtype": "tns:GetRacesResponse"
    },
    "GetEthnicities": {
      "@": {
        "name": "GetEthnicities"
      },
      "wsdl:documentation": [
        {
          "#": "Gets the list of Ethnicities",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetEthnicitiesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetEthnicitiesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetEthnicities",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetEthnicities",
      "outtype": "tns:GetEthnicitiesResponse"
    },
    "GetPreferredMethodsOfCommunication": {
      "@": {
        "name": "GetPreferredMethodsOfCommunication"
      },
      "wsdl:documentation": [
        {
          "#": "Gets the list of Preferred Methods of Communication",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPreferredMethodsOfCommunicationSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPreferredMethodsOfCommunicationSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPreferredMethodsOfCommunication",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetPreferredMethodsOfCommunication",
      "outtype": "tns:GetPreferredMethodsOfCommunicationResponse"
    },
    "GetAllLanguages": {
      "@": {
        "name": "GetAllLanguages"
      },
      "wsdl:documentation": [
        {
          "#": "Gets the list of all Languages",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetAllLanguagesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetAllLanguagesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetAllLanguages",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetAllLanguages",
      "outtype": "tns:GetAllLanguagesResponse"
    },
    "GetMostCommonLanguages": {
      "@": {
        "name": "GetMostCommonLanguages"
      },
      "wsdl:documentation": [
        {
          "#": "Gets the list of the most common Languages",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetMostCommonLanguagesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetMostCommonLanguagesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetMostCommonLanguages",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetMostCommonLanguages",
      "outtype": "tns:GetMostCommonLanguagesResponse"
    },
    "PatientInsurancePlanSummaryGetAllByPatientID": {
      "@": {
        "name": "PatientInsurancePlanSummaryGetAllByPatientID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientInsurancePlanSummary array object for the corresponding Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientInsurancePlanSummaryGetAllByPatientIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientInsurancePlanSummaryGetAllByPatientIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientInsurancePlanSummaryGetAllByPatientID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientInsurancePlanSummaryGetAllByPatientID",
      "outtype": "tns:PatientInsurancePlanSummaryGetAllByPatientIDResponse"
    },
    "PatientInsurancePlanBasicGetByPatientInsurancePlanID": {
      "@": {
        "name": "PatientInsurancePlanBasicGetByPatientInsurancePlanID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientInsurancePlanBasic object for the corresponding Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientInsurancePlanBasicGetByPatientInsurancePlanIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientInsurancePlanBasicGetByPatientInsurancePlanIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientInsurancePlanBasicGetByPatientInsurancePlanID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientInsurancePlanBasicGetByPatientInsurancePlanID",
      "outtype": "tns:PatientInsurancePlanBasicGetByPatientInsurancePlanIDResponse"
    },
    "PatientInsurancePlanInsert": {
      "@": {
        "name": "PatientInsurancePlanInsert"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a Patient's Insurance Plan.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientInsurancePlanInsertSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientInsurancePlanInsertSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientInsurancePlanInsert",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientInsurancePlanInsert",
      "outtype": "tns:PatientInsurancePlanInsertResponse"
    },
    "PatientInsurancePlanUpdate": {
      "@": {
        "name": "PatientInsurancePlanUpdate"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a Patient's Insurance Plan.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientInsurancePlanUpdateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientInsurancePlanUpdateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientInsurancePlanUpdate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientInsurancePlanUpdate",
      "outtype": "tns:PatientInsurancePlanUpdateResponse"
    },
    "PatientAppointmentReminderStatusGet": {
      "@": {
        "name": "PatientAppointmentReminderStatusGet"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the bool value for Patient's current appointment reminder setting.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientAppointmentReminderStatusGetSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientAppointmentReminderStatusGetSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientAppointmentReminderStatusGet",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientAppointmentReminderStatusGet",
      "outtype": "tns:PatientAppointmentReminderStatusGetResponse"
    },
    "PatientAppointmentReminderStatusSet": {
      "@": {
        "name": "PatientAppointmentReminderStatusSet"
      },
      "wsdl:documentation": [
        {
          "#": "Sets the bool value for Patient's current appointment reminder setting.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientAppointmentReminderStatusSetSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientAppointmentReminderStatusSetSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientAppointmentReminderStatusSet",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientAppointmentReminderStatusSet",
      "outtype": "tns:PatientAppointmentReminderStatusSetResponse"
    },
    "PatientPMHRetrieve": {
      "@": {
        "name": "PatientPMHRetrieve"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the Patient's current PMH values.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientPMHRetrieveSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientPMHRetrieveSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientPMHRetrieve",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientPMHRetrieve",
      "outtype": "tns:PatientPMHRetrieveResponse"
    },
    "PatientPMHUpdate": {
      "@": {
        "name": "PatientPMHUpdate"
      },
      "wsdl:documentation": [
        {
          "#": "Sets the Patient's PMH value.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientPMHUpdateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientPMHUpdateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientPMHUpdate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientPMHUpdate",
      "outtype": "tns:PatientPMHUpdateResponse"
    },
    "PatientAdvancedDirectiveGetAllByPatientID": {
      "@": {
        "name": "PatientAdvancedDirectiveGetAllByPatientID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientAdvancedDirective array object for the corresponding Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveGetAllByPatientIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveGetAllByPatientIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientAdvancedDirectiveGetAllByPatientID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientAdvancedDirectiveGetAllByPatientID",
      "outtype": "tns:PatientAdvancedDirectiveGetAllByPatientIDResponse"
    },
    "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveID": {
      "@": {
        "name": "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientAdvancedDirective object for the corresponding Advanced Directive ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientAdvancedDirectiveGetByPatientAdvancedDirectiveID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientAdvancedDirectiveGetByPatientAdvancedDirectiveID",
      "outtype": "tns:PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDResponse"
    },
    "PatientAdvancedDirectiveInsert": {
      "@": {
        "name": "PatientAdvancedDirectiveInsert"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a Patient Advanced Directive.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveInsertSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveInsertSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientAdvancedDirectiveInsert",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientAdvancedDirectiveInsert",
      "outtype": "tns:PatientAdvancedDirectiveInsertResponse"
    },
    "PatientAdvancedDirectiveUpdate": {
      "@": {
        "name": "PatientAdvancedDirectiveUpdate"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a Patient Advanced Directive.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveUpdateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveUpdateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientAdvancedDirectiveUpdate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientAdvancedDirectiveUpdate",
      "outtype": "tns:PatientAdvancedDirectiveUpdateResponse"
    },
    "PatientAdvancedDirectiveDelete": {
      "@": {
        "name": "PatientAdvancedDirectiveDelete"
      },
      "wsdl:documentation": [
        {
          "#": "Deletes a Patient Advanced Directive.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveDeleteSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientAdvancedDirectiveDeleteSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientAdvancedDirectiveDelete",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientAdvancedDirectiveDelete",
      "outtype": "tns:PatientAdvancedDirectiveDeleteResponse"
    },
    "PatientImmunizationGetAllByPatientID": {
      "@": {
        "name": "PatientImmunizationGetAllByPatientID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientImmunization array object for the corresponding Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientImmunizationGetAllByPatientIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientImmunizationGetAllByPatientIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientImmunizationGetAllByPatientID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientImmunizationGetAllByPatientID",
      "outtype": "tns:PatientImmunizationGetAllByPatientIDResponse"
    },
    "PatientImmunizationGetByPatientImmunizationID": {
      "@": {
        "name": "PatientImmunizationGetByPatientImmunizationID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_PatientImmunization object for the corresponding Immunization ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientImmunizationGetByPatientImmunizationIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientImmunizationGetByPatientImmunizationIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientImmunizationGetByPatientImmunizationID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientImmunizationGetByPatientImmunizationID",
      "outtype": "tns:PatientImmunizationGetByPatientImmunizationIDResponse"
    },
    "PatientImmunizationInsert": {
      "@": {
        "name": "PatientImmunizationInsert"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a Patient Immunization.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientImmunizationInsertSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientImmunizationInsertSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientImmunizationInsert",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientImmunizationInsert",
      "outtype": "tns:PatientImmunizationInsertResponse"
    },
    "PatientImmunizationUpdate": {
      "@": {
        "name": "PatientImmunizationUpdate"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a Patient Immunization.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientImmunizationUpdateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientImmunizationUpdateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientImmunizationUpdate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientImmunizationUpdate",
      "outtype": "tns:PatientImmunizationUpdateResponse"
    },
    "PatientImmunizationDelete": {
      "@": {
        "name": "PatientImmunizationDelete"
      },
      "wsdl:documentation": [
        {
          "#": "Deletes a Patient Immunization.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientImmunizationDeleteSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientImmunizationDeleteSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientImmunizationDelete",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientImmunizationDelete",
      "outtype": "tns:PatientImmunizationDeleteResponse"
    },
    "PatientUpdateNoKnownStatus": {
      "@": {
        "name": "PatientUpdateNoKnownStatus"
      },
      "wsdl:documentation": [
        {
          "#": "Sets a patient's No Known status",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientUpdateNoKnownStatusSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientUpdateNoKnownStatusSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientUpdateNoKnownStatus",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientUpdateNoKnownStatus",
      "outtype": "tns:PatientUpdateNoKnownStatusResponse"
    },
    "ChartAccessGetByPatientID": {
      "@": {
        "name": "ChartAccessGetByPatientID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_ChartAccess array object for the corresponding Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ChartAccessGetByPatientIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ChartAccessGetByPatientIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ChartAccessGetByPatientID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:ChartAccessGetByPatientID",
      "outtype": "tns:ChartAccessGetByPatientIDResponse"
    },
    "GetSmokingStatuses": {
      "@": {
        "name": "GetSmokingStatuses"
      },
      "wsdl:documentation": [
        {
          "#": "Return list of all smoking statuses.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetSmokingStatusesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetSmokingStatusesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetSmokingStatuses",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetSmokingStatuses",
      "outtype": "tns:GetSmokingStatusesResponse"
    },
    "GetPatientSmokingHistory": {
      "@": {
        "name": "GetPatientSmokingHistory"
      },
      "wsdl:documentation": [
        {
          "#": "Return smoking history for patient.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientSmokingHistorySoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientSmokingHistorySoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientSmokingHistory",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetPatientSmokingHistory",
      "outtype": "tns:GetPatientSmokingHistoryResponse"
    },
    "SavePatientSmokingStatus": {
      "@": {
        "name": "SavePatientSmokingStatus"
      },
      "wsdl:documentation": [
        {
          "#": "Return list of all smoking statuses.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:SavePatientSmokingStatusSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:SavePatientSmokingStatusSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/SavePatientSmokingStatus",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:SavePatientSmokingStatus",
      "outtype": "tns:SavePatientSmokingStatusResponse"
    },
    "PatientBasicGetBySearchCriteria": {
      "@": {
        "name": "PatientBasicGetBySearchCriteria"
      },
      "wsdl:documentation": [
        {
          "#": "Gets Patient's Formulary & Benefits Information",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientBasicGetBySearchCriteriaSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientBasicGetBySearchCriteriaSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientBasicGetBySearchCriteria",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientBasicGetBySearchCriteria",
      "outtype": "tns:PatientBasicGetBySearchCriteriaResponse"
    },
    "GetPatientImmunizationRegistry": {
      "@": {
        "name": "GetPatientImmunizationRegistry"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches PatientImmunizationRegistry HL7 string for the corresponding Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientImmunizationRegistrySoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientImmunizationRegistrySoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientImmunizationRegistry",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetPatientImmunizationRegistry",
      "outtype": "tns:GetPatientImmunizationRegistryResponse"
    },
    "GetPatientHealthSurveillance": {
      "@": {
        "name": "GetPatientHealthSurveillance"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches PatientImmunizationRegistry HL7 string for the corresponding Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientHealthSurveillanceSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientHealthSurveillanceSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientHealthSurveillance",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:GetPatientHealthSurveillance",
      "outtype": "tns:GetPatientHealthSurveillanceResponse"
    },
    "PatientListExported": {
      "@": {
        "name": "PatientListExported"
      },
      "wsdl:documentation": [
        {
          "#": "Updates database to indicate that a patient list was exported.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientListExportedSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientListExportedSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientListExported",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientListExported",
      "outtype": "tns:PatientListExportedResponse"
    },
    "PatientEducationActionPerformed": {
      "@": {
        "name": "PatientEducationActionPerformed"
      },
      "wsdl:documentation": [
        {
          "#": "Updates database to indicate that a patient education action was performed.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:PatientEducationActionPerformedSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:PatientEducationActionPerformedSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/PatientEducationActionPerformed",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
      "intype": "tns:PatientEducationActionPerformed",
      "outtype": "tns:PatientEducationActionPerformedResponse"
    }
  },
  "services": {
    "tns:PatientSoap": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
    "tns:PatientSoap12": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
    "tns:PatientHttpGet": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx",
    "tns:PatientHttpPost": "https://pfws.practicefusion.com/emr/2.0.45.1/Patient.asmx"
  },
  "messages": {
    "PatientGetByIDSoapIn": "tns:PatientGetByID",
    "PatientGetByIDSoapOut": "tns:PatientGetByIDResponse",
    "SearchPracticeForPatientSoapIn": "tns:SearchPracticeForPatient",
    "SearchPracticeForPatientSoapOut": "tns:SearchPracticeForPatientResponse",
    "PatientSummaryGetByPatientIDSoapIn": "tns:PatientSummaryGetByPatientID",
    "PatientSummaryGetByPatientIDSoapOut": "tns:PatientSummaryGetByPatientIDResponse",
    "PatientBasicGetByPatientIDSoapIn": "tns:PatientBasicGetByPatientID",
    "PatientBasicGetByPatientIDSoapOut": "tns:PatientBasicGetByPatientIDResponse",
    "PatientInsertBasicSoapIn": "tns:PatientInsertBasic",
    "PatientInsertBasicSoapOut": "tns:PatientInsertBasicResponse",
    "PatientUpdateBasicSoapIn": "tns:PatientUpdateBasic",
    "PatientUpdateBasicSoapOut": "tns:PatientUpdateBasicResponse",
    "PatientAddressGetByPatientIDSoapIn": "tns:PatientAddressGetByPatientID",
    "PatientAddressGetByPatientIDSoapOut": "tns:PatientAddressGetByPatientIDResponse",
    "PatientUpdateAddressSoapIn": "tns:PatientUpdateAddress",
    "PatientUpdateAddressSoapOut": "tns:PatientUpdateAddressResponse",
    "PatientScheduleGetByPatientIDSoapIn": "tns:PatientScheduleGetByPatientID",
    "PatientScheduleGetByPatientIDSoapOut": "tns:PatientScheduleGetByPatientIDResponse",
    "PatientDeleteAllFakePatientsSoapIn": "tns:PatientDeleteAllFakePatients",
    "PatientDeleteAllFakePatientsSoapOut": "tns:PatientDeleteAllFakePatientsResponse",
    "GetRacesSoapIn": "tns:GetRaces",
    "GetRacesSoapOut": "tns:GetRacesResponse",
    "GetEthnicitiesSoapIn": "tns:GetEthnicities",
    "GetEthnicitiesSoapOut": "tns:GetEthnicitiesResponse",
    "GetPreferredMethodsOfCommunicationSoapIn": "tns:GetPreferredMethodsOfCommunication",
    "GetPreferredMethodsOfCommunicationSoapOut": "tns:GetPreferredMethodsOfCommunicationResponse",
    "GetAllLanguagesSoapIn": "tns:GetAllLanguages",
    "GetAllLanguagesSoapOut": "tns:GetAllLanguagesResponse",
    "GetMostCommonLanguagesSoapIn": "tns:GetMostCommonLanguages",
    "GetMostCommonLanguagesSoapOut": "tns:GetMostCommonLanguagesResponse",
    "PatientInsurancePlanSummaryGetAllByPatientIDSoapIn": "tns:PatientInsurancePlanSummaryGetAllByPatientID",
    "PatientInsurancePlanSummaryGetAllByPatientIDSoapOut": "tns:PatientInsurancePlanSummaryGetAllByPatientIDResponse",
    "PatientInsurancePlanBasicGetByPatientInsurancePlanIDSoapIn": "tns:PatientInsurancePlanBasicGetByPatientInsurancePlanID",
    "PatientInsurancePlanBasicGetByPatientInsurancePlanIDSoapOut": "tns:PatientInsurancePlanBasicGetByPatientInsurancePlanIDResponse",
    "PatientInsurancePlanInsertSoapIn": "tns:PatientInsurancePlanInsert",
    "PatientInsurancePlanInsertSoapOut": "tns:PatientInsurancePlanInsertResponse",
    "PatientInsurancePlanUpdateSoapIn": "tns:PatientInsurancePlanUpdate",
    "PatientInsurancePlanUpdateSoapOut": "tns:PatientInsurancePlanUpdateResponse",
    "PatientAppointmentReminderStatusGetSoapIn": "tns:PatientAppointmentReminderStatusGet",
    "PatientAppointmentReminderStatusGetSoapOut": "tns:PatientAppointmentReminderStatusGetResponse",
    "PatientAppointmentReminderStatusSetSoapIn": "tns:PatientAppointmentReminderStatusSet",
    "PatientAppointmentReminderStatusSetSoapOut": "tns:PatientAppointmentReminderStatusSetResponse",
    "PatientPMHRetrieveSoapIn": "tns:PatientPMHRetrieve",
    "PatientPMHRetrieveSoapOut": "tns:PatientPMHRetrieveResponse",
    "PatientPMHUpdateSoapIn": "tns:PatientPMHUpdate",
    "PatientPMHUpdateSoapOut": "tns:PatientPMHUpdateResponse",
    "PatientAdvancedDirectiveGetAllByPatientIDSoapIn": "tns:PatientAdvancedDirectiveGetAllByPatientID",
    "PatientAdvancedDirectiveGetAllByPatientIDSoapOut": "tns:PatientAdvancedDirectiveGetAllByPatientIDResponse",
    "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDSoapIn": "tns:PatientAdvancedDirectiveGetByPatientAdvancedDirectiveID",
    "PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDSoapOut": "tns:PatientAdvancedDirectiveGetByPatientAdvancedDirectiveIDResponse",
    "PatientAdvancedDirectiveInsertSoapIn": "tns:PatientAdvancedDirectiveInsert",
    "PatientAdvancedDirectiveInsertSoapOut": "tns:PatientAdvancedDirectiveInsertResponse",
    "PatientAdvancedDirectiveUpdateSoapIn": "tns:PatientAdvancedDirectiveUpdate",
    "PatientAdvancedDirectiveUpdateSoapOut": "tns:PatientAdvancedDirectiveUpdateResponse",
    "PatientAdvancedDirectiveDeleteSoapIn": "tns:PatientAdvancedDirectiveDelete",
    "PatientAdvancedDirectiveDeleteSoapOut": "tns:PatientAdvancedDirectiveDeleteResponse",
    "PatientImmunizationGetAllByPatientIDSoapIn": "tns:PatientImmunizationGetAllByPatientID",
    "PatientImmunizationGetAllByPatientIDSoapOut": "tns:PatientImmunizationGetAllByPatientIDResponse",
    "PatientImmunizationGetByPatientImmunizationIDSoapIn": "tns:PatientImmunizationGetByPatientImmunizationID",
    "PatientImmunizationGetByPatientImmunizationIDSoapOut": "tns:PatientImmunizationGetByPatientImmunizationIDResponse",
    "PatientImmunizationInsertSoapIn": "tns:PatientImmunizationInsert",
    "PatientImmunizationInsertSoapOut": "tns:PatientImmunizationInsertResponse",
    "PatientImmunizationUpdateSoapIn": "tns:PatientImmunizationUpdate",
    "PatientImmunizationUpdateSoapOut": "tns:PatientImmunizationUpdateResponse",
    "PatientImmunizationDeleteSoapIn": "tns:PatientImmunizationDelete",
    "PatientImmunizationDeleteSoapOut": "tns:PatientImmunizationDeleteResponse",
    "PatientUpdateNoKnownStatusSoapIn": "tns:PatientUpdateNoKnownStatus",
    "PatientUpdateNoKnownStatusSoapOut": "tns:PatientUpdateNoKnownStatusResponse",
    "ChartAccessGetByPatientIDSoapIn": "tns:ChartAccessGetByPatientID",
    "ChartAccessGetByPatientIDSoapOut": "tns:ChartAccessGetByPatientIDResponse",
    "GetSmokingStatusesSoapIn": "tns:GetSmokingStatuses",
    "GetSmokingStatusesSoapOut": "tns:GetSmokingStatusesResponse",
    "GetPatientSmokingHistorySoapIn": "tns:GetPatientSmokingHistory",
    "GetPatientSmokingHistorySoapOut": "tns:GetPatientSmokingHistoryResponse",
    "SavePatientSmokingStatusSoapIn": "tns:SavePatientSmokingStatus",
    "SavePatientSmokingStatusSoapOut": "tns:SavePatientSmokingStatusResponse",
    "PatientBasicGetBySearchCriteriaSoapIn": "tns:PatientBasicGetBySearchCriteria",
    "PatientBasicGetBySearchCriteriaSoapOut": "tns:PatientBasicGetBySearchCriteriaResponse",
    "GetPatientImmunizationRegistrySoapIn": "tns:GetPatientImmunizationRegistry",
    "GetPatientImmunizationRegistrySoapOut": "tns:GetPatientImmunizationRegistryResponse",
    "GetPatientHealthSurveillanceSoapIn": "tns:GetPatientHealthSurveillance",
    "GetPatientHealthSurveillanceSoapOut": "tns:GetPatientHealthSurveillanceResponse",
    "PatientListExportedSoapIn": "tns:PatientListExported",
    "PatientListExportedSoapOut": "tns:PatientListExportedResponse",
    "PatientEducationActionPerformedSoapIn": "tns:PatientEducationActionPerformed",
    "PatientEducationActionPerformedSoapOut": "tns:PatientEducationActionPerformedResponse"
  }
}
WSDL_Interface.add("Patient", Patient);
}());
