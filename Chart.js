var PF = (PF || {});
PF.Chart = (PF.Chart || {});
PF.Chart.wsdl = {
  "types": {
    "TemplateGetByID": {
      "s:element": [
        {
          "@": {
            "name": "TemplateGetByID"
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
                        "name": "i_lTemplateID",
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
    "TemplateGetByIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "TemplateGetByIDResponse"
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
                        "name": "TemplateGetByIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Template",
                        "type": "tns:BL_Template"
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
    "TemplateSummaryGetByProviderID": {
      "s:element": [
        {
          "@": {
            "name": "TemplateSummaryGetByProviderID"
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
                        "name": "i_lProviderID",
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
    "TemplateSummaryGetByProviderIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "TemplateSummaryGetByProviderIDResponse"
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
                        "name": "TemplateSummaryGetByProviderIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrTemplateSummary",
                        "type": "tns:ArrayOfBL_TemplateSummary"
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
    "TemplateSummaryGetPublic": {
      "s:element": [
        {
          "@": {
            "name": "TemplateSummaryGetPublic"
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
    "TemplateSummaryGetPublicResponse": {
      "s:element": [
        {
          "@": {
            "name": "TemplateSummaryGetPublicResponse"
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
                        "name": "TemplateSummaryGetPublicResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrTemplateSummary",
                        "type": "tns:ArrayOfBL_TemplateSummary"
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
    "TemplateSummaryGetBySearchString": {
      "s:element": [
        {
          "@": {
            "name": "TemplateSummaryGetBySearchString"
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
                        "name": "i_lProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strSearchString",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_eTemplateFieldToSearch",
                        "type": "tns:BL_eTemplateField"
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
    "TemplateSummaryGetBySearchStringResponse": {
      "s:element": [
        {
          "@": {
            "name": "TemplateSummaryGetBySearchStringResponse"
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
                        "name": "TemplateSummaryGetBySearchStringResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrTemplateSummary",
                        "type": "tns:ArrayOfBL_TemplateSummary"
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
    "InsertTemplate": {
      "s:element": [
        {
          "@": {
            "name": "InsertTemplate"
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
                        "name": "io_Template",
                        "type": "tns:BL_Template"
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
    "InsertTemplateResponse": {
      "s:element": [
        {
          "@": {
            "name": "InsertTemplateResponse"
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
                        "name": "InsertTemplateResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Template",
                        "type": "tns:BL_Template"
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
    "ShareTemplates": {
      "s:element": [
        {
          "@": {
            "name": "ShareTemplates"
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
                        "name": "i_arrTemplateID",
                        "type": "tns:ArrayOfLong"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrProviderID",
                        "type": "tns:ArrayOfLong"
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
    "ShareTemplatesResponse": {
      "s:element": [
        {
          "@": {
            "name": "ShareTemplatesResponse"
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
                        "name": "ShareTemplatesResult",
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
    "ClaimTemplate": {
      "s:element": [
        {
          "@": {
            "name": "ClaimTemplate"
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
                        "name": "i_lTemplateID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lProviderID",
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
    "ClaimTemplateResponse": {
      "s:element": [
        {
          "@": {
            "name": "ClaimTemplateResponse"
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
                        "name": "ClaimTemplateResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Template",
                        "type": "tns:BL_Template"
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
    "UnclaimTemplate": {
      "s:element": [
        {
          "@": {
            "name": "UnclaimTemplate"
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
                        "name": "i_lTemplateID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lProviderID",
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
    "UnclaimTemplateResponse": {
      "s:element": [
        {
          "@": {
            "name": "UnclaimTemplateResponse"
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
                        "name": "UnclaimTemplateResult",
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
    "UpdateTemplate": {
      "s:element": [
        {
          "@": {
            "name": "UpdateTemplate"
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
                        "name": "io_Template",
                        "type": "tns:BL_Template"
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
    "UpdateTemplateResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdateTemplateResponse"
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
                        "name": "UpdateTemplateResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Template",
                        "type": "tns:BL_Template"
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
    "DeleteTemplate": {
      "s:element": [
        {
          "@": {
            "name": "DeleteTemplate"
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
                        "name": "io_Template",
                        "type": "tns:BL_Template"
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
    "DeleteTemplateResponse": {
      "s:element": [
        {
          "@": {
            "name": "DeleteTemplateResponse"
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
                        "name": "DeleteTemplateResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Template",
                        "type": "tns:BL_Template"
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
    "ChartGetByID": {
      "s:element": [
        {
          "@": {
            "name": "ChartGetByID"
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
                        "name": "i_lChartID",
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
    "ChartGetByIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "ChartGetByIDResponse"
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
                        "name": "ChartGetByIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Chart",
                        "type": "tns:BL_Chart"
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
    "ChartExtendedGetByID": {
      "s:element": [
        {
          "@": {
            "name": "ChartExtendedGetByID"
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
                        "name": "i_lChartID",
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
    "ChartExtendedGetByIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "ChartExtendedGetByIDResponse"
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
                        "name": "ChartExtendedGetByIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_ChartExtended",
                        "type": "tns:BL_ChartExtended"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_OncProcedures",
                        "type": "tns:ArrayOfBL_OncProcedure"
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
    "ChartAccessInsert": {
      "s:element": [
        {
          "@": {
            "name": "ChartAccessInsert"
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
    "ChartAccessInsertResponse": {
      "s:element": [
        {
          "@": {
            "name": "ChartAccessInsertResponse"
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
                        "name": "ChartAccessInsertResult",
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
    "GetChartsByPatient": {
      "s:element": [
        {
          "@": {
            "name": "GetChartsByPatient"
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
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_bReturnAll",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lStartRowIndex",
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
    "GetChartsByPatientResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetChartsByPatientResponse"
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
                        "name": "GetChartsByPatientResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrChart",
                        "type": "tns:ArrayOfBL_Chart"
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
    "ChartSummaryGetByPracticeAndPatient": {
      "s:element": [
        {
          "@": {
            "name": "ChartSummaryGetByPracticeAndPatient"
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
    "ChartSummaryGetByPracticeAndPatientResponse": {
      "s:element": [
        {
          "@": {
            "name": "ChartSummaryGetByPracticeAndPatientResponse"
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
                        "name": "ChartSummaryGetByPracticeAndPatientResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrChartSummary",
                        "type": "tns:ArrayOfBL_ChartSummary"
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
    "StartNewChart": {
      "s:element": [
        {
          "@": {
            "name": "StartNewChart"
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
                        "name": "i_lProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_dtDateOfService",
                        "type": "s:dateTime"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_iChartTypeID",
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
    "StartNewChartResponse": {
      "s:element": [
        {
          "@": {
            "name": "StartNewChartResponse"
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
                        "name": "StartNewChartResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Chart",
                        "type": "tns:BL_Chart"
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
    "SignChart": {
      "s:element": [
        {
          "@": {
            "name": "SignChart"
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
                        "name": "i_lChartID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lSignedProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_dtSignedDate",
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
    "SignChartResponse": {
      "s:element": [
        {
          "@": {
            "name": "SignChartResponse"
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
                        "name": "SignChartResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Chart",
                        "type": "tns:BL_Chart"
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
    "DeleteChart": {
      "s:element": [
        {
          "@": {
            "name": "DeleteChart"
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
                        "name": "i_lChartID",
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
    "DeleteChartResponse": {
      "s:element": [
        {
          "@": {
            "name": "DeleteChartResponse"
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
                        "name": "DeleteChartResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Chart",
                        "type": "tns:BL_Chart"
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
    "UpdateChartVitalsAndChiefComplaint": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartVitalsAndChiefComplaint"
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
                        "name": "i_lChartID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strChiefComplaint",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Vitals",
                        "type": "tns:BL_VitalsStandard"
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
    "UpdateChartVitalsAndChiefComplaintResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartVitalsAndChiefComplaintResponse"
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
                        "name": "UpdateChartVitalsAndChiefComplaintResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Vitals",
                        "type": "tns:BL_VitalsStandard"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Chart",
                        "type": "tns:BL_Chart"
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
    "UpdateChartIndividualSOAP": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartIndividualSOAP"
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
                        "name": "i_lChartID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strSOAPFieldKey",
                        "type": "s:string"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_strSOAPFieldValue",
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
    "UpdateChartIndividualSOAPResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartIndividualSOAPResponse"
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
                        "name": "UpdateChartIndividualSOAPResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Chart",
                        "type": "tns:BL_Chart"
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
    "UpdateChartSOAP": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartSOAP"
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
                        "name": "i_lChartID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrSOAPPair",
                        "type": "tns:ArrayOfSOAPPair"
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
    "UpdateChartSOAPResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartSOAPResponse"
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
                        "name": "UpdateChartSOAPResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_Chart",
                        "type": "tns:BL_Chart"
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
    "UpdateChart": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChart"
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
                        "name": "i_lChartID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Chart",
                        "type": "tns:BL_Chart"
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
    "UpdateChartResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartResponse"
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
                        "name": "UpdateChartResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Chart",
                        "type": "tns:BL_Chart"
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
    "UpdateChartSeenByProvider": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartSeenByProvider"
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
                        "name": "i_lChartID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lNewProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Chart",
                        "type": "tns:BL_Chart"
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
    "UpdateChartSeenByProviderResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartSeenByProviderResponse"
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
                        "name": "UpdateChartSeenByProviderResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_Chart",
                        "type": "tns:BL_Chart"
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
    "StandardVitalsGetByChartID": {
      "s:element": [
        {
          "@": {
            "name": "StandardVitalsGetByChartID"
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
                        "name": "i_lChartID",
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
    "StandardVitalsGetByChartIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "StandardVitalsGetByChartIDResponse"
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
                        "name": "StandardVitalsGetByChartIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_VitalsStandard",
                        "type": "tns:BL_VitalsStandard"
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
    "GetStandardVitalsByPatient": {
      "s:element": [
        {
          "@": {
            "name": "GetStandardVitalsByPatient"
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
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_bReturnAll",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lStartRowIndex",
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
    "GetStandardVitalsByPatientResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetStandardVitalsByPatientResponse"
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
                        "name": "GetStandardVitalsByPatientResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrVitals",
                        "type": "tns:ArrayOfBL_VitalsStandard"
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
    "ChartAddendumGetByID": {
      "s:element": [
        {
          "@": {
            "name": "ChartAddendumGetByID"
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
                        "name": "i_lChartAddendumID",
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
    "ChartAddendumGetByIDResponse": {
      "s:element": [
        {
          "@": {
            "name": "ChartAddendumGetByIDResponse"
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
                        "name": "ChartAddendumGetByIDResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_ChartAddendum",
                        "type": "tns:BL_ChartAddendum"
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
    "GetChartAddendaByChart": {
      "s:element": [
        {
          "@": {
            "name": "GetChartAddendaByChart"
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
                        "name": "i_lChartID",
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
    "GetChartAddendaByChartResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetChartAddendaByChartResponse"
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
                        "name": "GetChartAddendaByChartResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrChartAddendum",
                        "type": "tns:ArrayOfBL_ChartAddendum"
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
    "InsertChartAddendum": {
      "s:element": [
        {
          "@": {
            "name": "InsertChartAddendum"
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
                        "name": "io_ChartAddendum",
                        "type": "tns:BL_ChartAddendum"
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
    "InsertChartAddendumResponse": {
      "s:element": [
        {
          "@": {
            "name": "InsertChartAddendumResponse"
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
                        "name": "InsertChartAddendumResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_ChartAddendum",
                        "type": "tns:BL_ChartAddendum"
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
    "GetChartTypesByPractice": {
      "s:element": [
        {
          "@": {
            "name": "GetChartTypesByPractice"
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
    "GetChartTypesByPracticeResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetChartTypesByPracticeResponse"
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
                        "name": "GetChartTypesByPracticeResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrChartType",
                        "type": "tns:ArrayOfBL_ChartType"
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
    "InsertChartType": {
      "s:element": [
        {
          "@": {
            "name": "InsertChartType"
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
                        "name": "io_ChartType",
                        "type": "tns:BL_ChartType"
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
    "InsertChartTypeResponse": {
      "s:element": [
        {
          "@": {
            "name": "InsertChartTypeResponse"
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
                        "name": "InsertChartTypeResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_ChartType",
                        "type": "tns:BL_ChartType"
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
    "UpdateChartType": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartType"
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
                        "name": "io_ChartType",
                        "type": "tns:BL_ChartType"
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
    "UpdateChartTypeResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdateChartTypeResponse"
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
                        "name": "UpdateChartTypeResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_ChartType",
                        "type": "tns:BL_ChartType"
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
    "DiagnosisGetBySearchString": {
      "s:element": [
        {
          "@": {
            "name": "DiagnosisGetBySearchString"
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
                        "name": "i_strSearchString",
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
    "DiagnosisGetBySearchStringResponse": {
      "s:element": [
        {
          "@": {
            "name": "DiagnosisGetBySearchStringResponse"
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
                        "name": "DiagnosisGetBySearchStringResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrDiagnosis",
                        "type": "tns:ArrayOfBL_Diagnosis"
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
    "DiagnosisGetFrequentByProvider": {
      "s:element": [
        {
          "@": {
            "name": "DiagnosisGetFrequentByProvider"
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
                        "name": "i_lProviderID",
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
    "DiagnosisGetFrequentByProviderResponse": {
      "s:element": [
        {
          "@": {
            "name": "DiagnosisGetFrequentByProviderResponse"
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
                        "name": "DiagnosisGetFrequentByProviderResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrDiagnosis",
                        "type": "tns:ArrayOfBL_Diagnosis"
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
    "DiagnosisGetFrequentByPatient": {
      "s:element": [
        {
          "@": {
            "name": "DiagnosisGetFrequentByPatient"
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
    "DiagnosisGetFrequentByPatientResponse": {
      "s:element": [
        {
          "@": {
            "name": "DiagnosisGetFrequentByPatientResponse"
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
                        "name": "DiagnosisGetFrequentByPatientResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrDiagnosis",
                        "type": "tns:ArrayOfBL_Diagnosis"
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
    "DrugSearchResultGetBySearchString": {
      "s:element": [
        {
          "@": {
            "name": "DrugSearchResultGetBySearchString"
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
                        "name": "i_strSearchString",
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
    "DrugSearchResultGetBySearchStringResponse": {
      "s:element": [
        {
          "@": {
            "name": "DrugSearchResultGetBySearchStringResponse"
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
                        "name": "DrugSearchResultGetBySearchStringResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrDrugSearchResult",
                        "type": "tns:ArrayOfBL_DrugSearchResult"
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
    "DrugSearchGetFrequentByProvider": {
      "s:element": [
        {
          "@": {
            "name": "DrugSearchGetFrequentByProvider"
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
                        "name": "i_lProviderID",
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
    "DrugSearchGetFrequentByProviderResponse": {
      "s:element": [
        {
          "@": {
            "name": "DrugSearchGetFrequentByProviderResponse"
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
                        "name": "DrugSearchGetFrequentByProviderResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrDrugSearchResult",
                        "type": "tns:ArrayOfBL_DrugSearchResult"
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
    "GetPatientMedicationPrescriptions": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientMedicationPrescriptions"
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
                        "name": "i_lPatientMedicationID",
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
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_bReturnAll",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lStartRowIndex",
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
    "GetPatientMedicationPrescriptionsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientMedicationPrescriptionsResponse"
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
                        "name": "GetPatientMedicationPrescriptionsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientMedicationPrescription",
                        "type": "tns:ArrayOfBL_PatientMedicationPrescription"
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
    "GetPatientMedicationPrescription": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientMedicationPrescription"
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
                        "name": "i_lPatientMedicationPrescriptionID",
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
    "GetPatientMedicationPrescriptionResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientMedicationPrescriptionResponse"
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
                        "name": "GetPatientMedicationPrescriptionResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_PatientMedicationPrescription",
                        "type": "tns:BL_PatientMedicationPrescription"
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
    "InsertPatientMedicationPrescription": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientMedicationPrescription"
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
                        "name": "io_PatientMedicationPrescription",
                        "type": "tns:BL_PatientMedicationPrescription"
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
    "InsertPatientMedicationPrescriptionResponse": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientMedicationPrescriptionResponse"
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
                        "name": "InsertPatientMedicationPrescriptionResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientMedicationPrescription",
                        "type": "tns:BL_PatientMedicationPrescription"
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
    "UpdatePatientMedicationPrescription": {
      "s:element": [
        {
          "@": {
            "name": "UpdatePatientMedicationPrescription"
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
                        "name": "io_PatientMedicationPrescription",
                        "type": "tns:BL_PatientMedicationPrescription"
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
    "UpdatePatientMedicationPrescriptionResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdatePatientMedicationPrescriptionResponse"
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
                        "name": "UpdatePatientMedicationPrescriptionResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientMedicationPrescription",
                        "type": "tns:BL_PatientMedicationPrescription"
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
    "DeletePatientMedicationPrescription": {
      "s:element": [
        {
          "@": {
            "name": "DeletePatientMedicationPrescription"
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
                        "name": "io_PatientMedicationPrescription",
                        "type": "tns:BL_PatientMedicationPrescription"
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
    "DeletePatientMedicationPrescriptionResponse": {
      "s:element": [
        {
          "@": {
            "name": "DeletePatientMedicationPrescriptionResponse"
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
                        "name": "DeletePatientMedicationPrescriptionResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientMedicationPrescription",
                        "type": "tns:BL_PatientMedicationPrescription"
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
    "ServiceGetBySearchString": {
      "s:element": [
        {
          "@": {
            "name": "ServiceGetBySearchString"
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
                        "name": "i_strSearchString",
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
    "ServiceGetBySearchStringResponse": {
      "s:element": [
        {
          "@": {
            "name": "ServiceGetBySearchStringResponse"
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
                        "name": "ServiceGetBySearchStringResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrService",
                        "type": "tns:ArrayOfBL_ServiceSummary"
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
    "ServiceGetFrequent": {
      "s:element": [
        {
          "@": {
            "name": "ServiceGetFrequent"
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
    "ServiceGetFrequentResponse": {
      "s:element": [
        {
          "@": {
            "name": "ServiceGetFrequentResponse"
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
                        "name": "ServiceGetFrequentResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrService",
                        "type": "tns:ArrayOfBL_ServiceSummary"
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
    "ServiceGetFrequentByProvider": {
      "s:element": [
        {
          "@": {
            "name": "ServiceGetFrequentByProvider"
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
                        "name": "i_lProviderID",
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
    "ServiceGetFrequentByProviderResponse": {
      "s:element": [
        {
          "@": {
            "name": "ServiceGetFrequentByProviderResponse"
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
                        "name": "ServiceGetFrequentByProviderResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrService",
                        "type": "tns:ArrayOfBL_ServiceSummary"
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
    "BillingTermsGetByChart": {
      "s:element": [
        {
          "@": {
            "name": "BillingTermsGetByChart"
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
                        "name": "i_lChartID",
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
    "BillingTermsGetByChartResponse": {
      "s:element": [
        {
          "@": {
            "name": "BillingTermsGetByChartResponse"
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
                        "name": "BillingTermsGetByChartResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrDiagnosisTypeSummary",
                        "type": "tns:ArrayOfBL_Diagnosis"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrServiceTypeSummary",
                        "type": "tns:ArrayOfBL_ServiceTypeSummary"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_strComments",
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
    "BillingTermsSave": {
      "s:element": [
        {
          "@": {
            "name": "BillingTermsSave"
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
                        "name": "i_lChartID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrDiagnosisTypeSummary",
                        "type": "tns:ArrayOfBL_Diagnosis"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrServiceTypeSummary",
                        "type": "tns:ArrayOfBL_ServiceTypeSummary"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_strComments",
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
    "BillingTermsSaveResponse": {
      "s:element": [
        {
          "@": {
            "name": "BillingTermsSaveResponse"
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
                        "name": "BillingTermsSaveResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrDiagnosisTypeSummary",
                        "type": "tns:ArrayOfBL_Diagnosis"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrServiceTypeSummary",
                        "type": "tns:ArrayOfBL_ServiceTypeSummary"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_strComments",
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
    "GetPatientDiagnoses": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientDiagnoses"
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
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_bIncludeInactive",
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
    "GetPatientDiagnosesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientDiagnosesResponse"
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
                        "name": "GetPatientDiagnosesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bHasNoActiveDiagnoses",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientDiagnosis",
                        "type": "tns:ArrayOfBL_PatientDiagnosis"
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
    "GetRelatedMedications_new": {
      "s:element": [
        {
          "@": {
            "name": "GetRelatedMedications_new"
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
                        "name": "i_lPatientDiagnosisID",
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
    "GetRelatedMedications_newResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetRelatedMedications_newResponse"
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
                        "name": "GetRelatedMedications_newResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientMedication",
                        "type": "tns:ArrayOfBL_PatientMedication"
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
    "GetPatientVisitDiagnoses": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientVisitDiagnoses"
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
                        "name": "i_lChartID",
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
    "GetPatientVisitDiagnosesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientVisitDiagnosesResponse"
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
                        "name": "GetPatientVisitDiagnosesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientVisitDiagnosis",
                        "type": "tns:ArrayOfBL_PatientVisitDiagnosis"
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
    "OrderPatientVisitDiagnoses": {
      "s:element": [
        {
          "@": {
            "name": "OrderPatientVisitDiagnoses"
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
                        "name": "i_lChartNoteID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrOrderedPatientVisitDiagnosisIDs",
                        "type": "tns:ArrayOfLong"
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
    "OrderPatientVisitDiagnosesResponse": {
      "s:element": [
        {
          "@": {
            "name": "OrderPatientVisitDiagnosesResponse"
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
                        "name": "OrderPatientVisitDiagnosesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientVisitDiagnosis",
                        "type": "tns:ArrayOfBL_PatientVisitDiagnosis"
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
    "InsertPatientVisitDiagnosis": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientVisitDiagnosis"
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
                        "name": "io_PatientVisitDiagnosis",
                        "type": "tns:BL_PatientVisitDiagnosis"
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
    "InsertPatientVisitDiagnosisResponse": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientVisitDiagnosisResponse"
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
                        "name": "InsertPatientVisitDiagnosisResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientVisitDiagnosis",
                        "type": "tns:BL_PatientVisitDiagnosis"
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
    "InsertPatientVisitDiagnoses": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientVisitDiagnoses"
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
                        "name": "i_lChartNoteID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrPatientDiagnosisIDs",
                        "type": "tns:ArrayOfLong"
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
    "InsertPatientVisitDiagnosesResponse": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientVisitDiagnosesResponse"
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
                        "name": "InsertPatientVisitDiagnosesResult",
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
    "UpdatePatientVisitDiagnosis": {
      "s:element": [
        {
          "@": {
            "name": "UpdatePatientVisitDiagnosis"
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
                        "name": "io_PatientVisitDiagnosis",
                        "type": "tns:BL_PatientVisitDiagnosis"
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
    "UpdatePatientVisitDiagnosisResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdatePatientVisitDiagnosisResponse"
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
                        "name": "UpdatePatientVisitDiagnosisResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientVisitDiagnosis",
                        "type": "tns:BL_PatientVisitDiagnosis"
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
    "DeletePatientVisitDiagnosis": {
      "s:element": [
        {
          "@": {
            "name": "DeletePatientVisitDiagnosis"
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
                        "name": "io_PatientVisitDiagnosis",
                        "type": "tns:BL_PatientVisitDiagnosis"
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
    "DeletePatientVisitDiagnosisResponse": {
      "s:element": [
        {
          "@": {
            "name": "DeletePatientVisitDiagnosisResponse"
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
                        "name": "DeletePatientVisitDiagnosisResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientVisitDiagnosis",
                        "type": "tns:BL_PatientVisitDiagnosis"
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
    "GetPatientMedications": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientMedications"
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
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_bIncludePrescriptions",
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
    "GetPatientMedicationsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientMedicationsResponse"
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
                        "name": "GetPatientMedicationsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bHasNoActiveMedications",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientMedication",
                        "type": "tns:ArrayOfBL_PatientMedication"
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
    "GetPatientVisitMedications": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientVisitMedications"
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
                        "name": "i_lChartID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_bIncludePrescriptions",
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
    "GetPatientVisitMedicationsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientVisitMedicationsResponse"
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
                        "name": "GetPatientVisitMedicationsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientVisitMedication",
                        "type": "tns:ArrayOfBL_PatientVisitMedication"
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
    "OrderPatientVisitMedications": {
      "s:element": [
        {
          "@": {
            "name": "OrderPatientVisitMedications"
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
                        "name": "i_lChartNoteID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrOrderedPatientVisitMedicationIDs",
                        "type": "tns:ArrayOfLong"
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
    "OrderPatientVisitMedicationsResponse": {
      "s:element": [
        {
          "@": {
            "name": "OrderPatientVisitMedicationsResponse"
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
                        "name": "OrderPatientVisitMedicationsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientVisitMedication",
                        "type": "tns:ArrayOfBL_PatientVisitMedication"
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
    "InsertPatientVisitMedication": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientVisitMedication"
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
                        "name": "io_PatientVisitMedication",
                        "type": "tns:BL_PatientVisitMedication"
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
    "InsertPatientVisitMedicationResponse": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientVisitMedicationResponse"
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
                        "name": "InsertPatientVisitMedicationResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientVisitMedication",
                        "type": "tns:BL_PatientVisitMedication"
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
    "InsertPatientVisitMedications": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientVisitMedications"
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
                        "name": "i_lChartNoteID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrPatientMedicationIDs",
                        "type": "tns:ArrayOfLong"
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
    "InsertPatientVisitMedicationsResponse": {
      "s:element": [
        {
          "@": {
            "name": "InsertPatientVisitMedicationsResponse"
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
                        "name": "InsertPatientVisitMedicationsResult",
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
    "UpdatePatientVisitMedication": {
      "s:element": [
        {
          "@": {
            "name": "UpdatePatientVisitMedication"
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
                        "name": "io_PatientVisitMedication",
                        "type": "tns:BL_PatientVisitMedication"
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
    "UpdatePatientVisitMedicationResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdatePatientVisitMedicationResponse"
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
                        "name": "UpdatePatientVisitMedicationResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientVisitMedication",
                        "type": "tns:BL_PatientVisitMedication"
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
    "DeletePatientVisitMedication": {
      "s:element": [
        {
          "@": {
            "name": "DeletePatientVisitMedication"
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
                        "name": "io_PatientVisitMedication",
                        "type": "tns:BL_PatientVisitMedication"
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
    "DeletePatientVisitMedicationResponse": {
      "s:element": [
        {
          "@": {
            "name": "DeletePatientVisitMedicationResponse"
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
                        "name": "DeletePatientVisitMedicationResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "io_PatientVisitMedication",
                        "type": "tns:BL_PatientVisitMedication"
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
    "GetAllergyGroups": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergyGroups"
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
    "GetAllergyGroupsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergyGroupsResponse"
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
                        "name": "GetAllergyGroupsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrData",
                        "type": "tns:ArrayOfBL_AllergyGroup"
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
    "GetAllergyReactionGroups": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergyReactionGroups"
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
    "GetAllergyReactionGroupsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergyReactionGroupsResponse"
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
                        "name": "GetAllergyReactionGroupsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrData",
                        "type": "tns:ArrayOfBL_AllergyReactionGroup"
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
    "GetAllergyReactions": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergyReactions"
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
    "GetAllergyReactionsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergyReactionsResponse"
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
                        "name": "GetAllergyReactionsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrData",
                        "type": "tns:ArrayOfBL_AllergyReaction"
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
    "GetAllergySeverity": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergySeverity"
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
    "GetAllergySeverityResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergySeverityResponse"
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
                        "name": "GetAllergySeverityResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrData",
                        "type": "tns:ArrayOfBL_AllergySeverity"
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
    "GetAllergySubstances": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergySubstances"
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
    "GetAllergySubstancesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetAllergySubstancesResponse"
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
                        "name": "GetAllergySubstancesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrData",
                        "type": "tns:ArrayOfBL_AllergySubstance"
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
    "GetCommonSigs": {
      "s:element": [
        {
          "@": {
            "name": "GetCommonSigs"
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
    "GetCommonSigsResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetCommonSigsResponse"
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
                        "name": "GetCommonSigsResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrSigCommon",
                        "type": "tns:ArrayOfBL_SigCommon"
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
    "GetPatientAllergies": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientAllergies"
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
                        "name": "i_lTranscriptID",
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
    "GetPatientAllergiesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientAllergiesResponse"
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
                        "name": "GetPatientAllergiesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "o_bHasNoKnownAllergies",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientAllergy",
                        "type": "tns:ArrayOfBL_PatientAllergy"
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
    "GetPatientAllergiesOrderForTranscript": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientAllergiesOrderForTranscript"
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
                        "name": "i_lTranscriptID",
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
    "GetPatientAllergiesOrderForTranscriptResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetPatientAllergiesOrderForTranscriptResponse"
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
                        "name": "GetPatientAllergiesOrderForTranscriptResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrPatientAllergyID",
                        "type": "tns:ArrayOfLong"
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
    "SavePatientAllergy": {
      "s:element": [
        {
          "@": {
            "name": "SavePatientAllergy"
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
                        "name": "i_lProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_bSaveTranscriptAllergy",
                        "type": "s:boolean"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lTranscriptIDToSave",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_allergy",
                        "type": "tns:BL_PatientAllergy"
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
    "SavePatientAllergyResponse": {
      "s:element": [
        {
          "@": {
            "name": "SavePatientAllergyResponse"
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
                        "name": "SavePatientAllergyResult",
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
    "SavePatientAllergiesForTranscript": {
      "s:element": [
        {
          "@": {
            "name": "SavePatientAllergiesForTranscript"
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
                        "name": "i_lProviderID",
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
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lTranscriptID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrPatientAllergyID",
                        "type": "tns:ArrayOfLong"
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
    "SavePatientAllergiesForTranscriptResponse": {
      "s:element": [
        {
          "@": {
            "name": "SavePatientAllergiesForTranscriptResponse"
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
                        "name": "SavePatientAllergiesForTranscriptResult",
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
    "DeletePatientAllergy": {
      "s:element": [
        {
          "@": {
            "name": "DeletePatientAllergy"
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
                        "name": "i_lProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lPatientAllergyID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lTranscriptAllergyID",
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
    "DeletePatientAllergyResponse": {
      "s:element": [
        {
          "@": {
            "name": "DeletePatientAllergyResponse"
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
                        "name": "DeletePatientAllergyResult",
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
    "OrderPatientAllergiesInTranscript": {
      "s:element": [
        {
          "@": {
            "name": "OrderPatientAllergiesInTranscript"
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
                        "name": "i_lProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lTranscriptID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_lArrOrderedTranscriptAllergies",
                        "type": "tns:ArrayOfLong"
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
    "OrderPatientAllergiesInTranscriptResponse": {
      "s:element": [
        {
          "@": {
            "name": "OrderPatientAllergiesInTranscriptResponse"
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
                        "name": "OrderPatientAllergiesInTranscriptResult",
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
    "GetOncProceduresForTranscript": {
      "s:element": [
        {
          "@": {
            "name": "GetOncProceduresForTranscript"
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
                        "name": "i_lProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lTranscriptID",
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
    "GetOncProceduresForTranscriptResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetOncProceduresForTranscriptResponse"
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
                        "name": "GetOncProceduresForTranscriptResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrOncProcedures",
                        "type": "tns:ArrayOfBL_OncProcedure"
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
    "UpdateOncProceduresForTranscript": {
      "s:element": [
        {
          "@": {
            "name": "UpdateOncProceduresForTranscript"
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
                        "name": "i_lProviderID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "1",
                        "maxOccurs": "1",
                        "name": "i_lTranscriptID",
                        "type": "s:long"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "i_arrOncProcedureIDs",
                        "type": "tns:ArrayOfLong"
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
    "UpdateOncProceduresForTranscriptResponse": {
      "s:element": [
        {
          "@": {
            "name": "UpdateOncProceduresForTranscriptResponse"
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
                        "name": "UpdateOncProceduresForTranscriptResult",
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
    "GetOncProcedureCategories": {
      "s:element": [
        {
          "@": {
            "name": "GetOncProcedureCategories"
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
                        "name": "i_lProviderID",
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
                        "name": "i_dtDateOfService",
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
    "GetOncProcedureCategoriesResponse": {
      "s:element": [
        {
          "@": {
            "name": "GetOncProcedureCategoriesResponse"
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
                        "name": "GetOncProcedureCategoriesResult",
                        "type": "tns:WebServiceResponse"
                      }
                    },
                    {
                      "@": {
                        "minOccurs": "0",
                        "maxOccurs": "1",
                        "name": "o_arrOncProcedureCategories",
                        "type": "tns:ArrayOfBL_OncProcedureCategory"
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
    "BL_eTemplateField": {
      "s:simpleType": [
        {
          "@": {
            "name": "BL_eTemplateField"
          },
          "s:restriction": [
            {
              "@": {
                "base": "s:string"
              },
              "s:enumeration": [
                {
                  "@": {
                    "value": "All"
                  }
                },
                {
                  "@": {
                    "value": "Name"
                  }
                },
                {
                  "@": {
                    "value": "S"
                  }
                },
                {
                  "@": {
                    "value": "O"
                  }
                },
                {
                  "@": {
                    "value": "A"
                  }
                },
                {
                  "@": {
                    "value": "P"
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
    "BL_Template": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Template"
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
                    "name": "lProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iTemplateTypeID",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strTemplateName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strS",
                    "type": "tns:ArrayOfString"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strO",
                    "type": "tns:ArrayOfString"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strA",
                    "type": "tns:ArrayOfString"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strP",
                    "type": "tns:ArrayOfString"
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
    "ArrayOfBL_TemplateSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_TemplateSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_TemplateSummary",
                    "nillable": "true",
                    "type": "tns:BL_TemplateSummary"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_TemplateSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_TemplateSummary"
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
                    "name": "strTemplateName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsProviderTemplate",
                    "type": "s:boolean"
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
    "BL_Chart": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_Chart"
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
                    "name": "lProviderID",
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
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsSigned",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSignedProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtSignedAt",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strChiefComplaint",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSubjective",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strObjective",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAssessment",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPlan",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bSmoke",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lLastModifiedByID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtLastModifiedDateTime",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iChartTypeID",
                    "type": "s:int"
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
    "BL_ChartExtended": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_ChartExtended"
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
                    "name": "lProviderID",
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
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsSigned",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSignedProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtSignedAt",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strChiefComplaint",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSubjective",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strObjective",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAssessment",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strPlan",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bSmoke",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lLastModifiedByID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtLastModifiedDateTime",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iChartTypeID",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "vitals",
                    "type": "tns:BL_VitalsStandard"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrAddenda",
                    "type": "tns:ArrayOfBL_ChartAddendum"
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
    "BL_VitalsStandard": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_VitalsStandard"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lChartID",
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
                    "name": "fHeight",
                    "type": "s:float"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "fWeight",
                    "type": "s:float"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iSystolicBloodPressure",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iDiastolicBloodPressure",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "fPulse",
                    "type": "s:float"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "fTemperature",
                    "type": "s:float"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "fRespiratoryRate",
                    "type": "s:float"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "fHeadCircumference",
                    "type": "s:float"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lProviderSeenByID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "fBMI",
                    "type": "s:float"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "fBMIPercentile",
                    "type": "s:float"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_ChartAddendum": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_ChartAddendum"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_ChartAddendum",
                    "nillable": "true",
                    "type": "tns:BL_ChartAddendum"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_ChartAddendum": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_ChartAddendum"
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
                    "name": "lChartID",
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
                    "name": "lProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strAddendum",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lLastModifiedByID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtLastModifiedDateTime",
                    "type": "s:dateTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_OncProcedure": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_OncProcedure"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_OncProcedure",
                    "nillable": "true",
                    "type": "tns:BL_OncProcedure"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_OncProcedure": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_OncProcedure"
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
                    "name": "lOncProcedureCategoryID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iDisplayOrder",
                    "type": "s:int"
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
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strCriteriaDescription",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_Chart": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_Chart"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_Chart",
                    "nillable": "true",
                    "type": "tns:BL_Chart"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_ChartSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_ChartSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_ChartSummary",
                    "nillable": "true",
                    "type": "tns:BL_ChartSummary"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_ChartSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_ChartSummary"
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
                    "name": "dtDateOfService",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strChiefComplaint",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strS",
                    "type": "tns:ArrayOfString"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strO",
                    "type": "tns:ArrayOfString"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strA",
                    "type": "tns:ArrayOfString"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strP",
                    "type": "tns:ArrayOfString"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsSigned",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iChartTypeID",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lProviderSeenByID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lProviderSignedByID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtSignedAt",
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
    "ArrayOfSOAPPair": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfSOAPPair"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "SOAPPair",
                    "nillable": "true",
                    "type": "tns:SOAPPair"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "SOAPPair": {
      "s:complexType": [
        {
          "@": {
            "name": "SOAPPair"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Key",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "Value",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_VitalsStandard": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_VitalsStandard"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_VitalsStandard",
                    "nillable": "true",
                    "type": "tns:BL_VitalsStandard"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_ChartType": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_ChartType"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_ChartType",
                    "nillable": "true",
                    "type": "tns:BL_ChartType"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_ChartType": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_ChartType"
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
                    "name": "strChartType",
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
    "ArrayOfBL_DrugSearchResult": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_DrugSearchResult"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_DrugSearchResult",
                    "nillable": "true",
                    "type": "tns:BL_DrugSearchResult"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_DrugSearchResult": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_DrugSearchResult"
          },
          "s:complexContent": [
            {
              "@": {
                "mixed": "false"
              },
              "s:extension": [
                {
                  "@": {
                    "base": "tns:BL_Medication"
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
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDrugCode",
                    "type": "s:string"
                  }
                },
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
    "ArrayOfBL_PatientMedicationPrescription": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientMedicationPrescription"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientMedicationPrescription",
                    "nillable": "true",
                    "type": "tns:BL_PatientMedicationPrescription"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientMedicationPrescription": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientMedicationPrescription"
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
                    "name": "lPatientMedicationID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPrescribedProviderID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtPrescriptionDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicationName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strDosage",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strQuantity",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strRefills",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bAuthorization",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsGenericOK",
                    "type": "s:boolean"
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
                    "name": "bRefillAsNeeded",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMaxDailyDose",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lErxSentId",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsNewRx",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSigProvider",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSigPatient",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSigID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lFormularyAuditID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_ServiceSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_ServiceSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_ServiceSummary",
                    "nillable": "true",
                    "type": "tns:BL_ServiceSummary"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_ServiceSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_ServiceSummary"
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
                    "name": "strCategory",
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
                    "name": "strShortDescription",
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
                    "name": "bDeleted",
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
                    "name": "bIsCustom",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bIsEditableByUser",
                    "type": "s:boolean"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_ServiceTypeSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_ServiceTypeSummary"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_ServiceTypeSummary",
                    "nillable": "true",
                    "type": "tns:BL_ServiceTypeSummary"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_ServiceTypeSummary": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_ServiceTypeSummary"
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
    "ArrayOfBL_PatientDiagnosis": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientDiagnosis"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientDiagnosis",
                    "nillable": "true",
                    "type": "tns:BL_PatientDiagnosis"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientDiagnosis": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientDiagnosis"
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
                    "name": "lDiagnosisID",
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
                    "name": "bIsAcute",
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
                    "name": "dtStartDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtStopDate",
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
                    "name": "bIsTerminal",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrTranscriptDiagnosis",
                    "type": "tns:ArrayOfBL_TranscriptDiagnosis"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_TranscriptDiagnosis": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_TranscriptDiagnosis"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_TranscriptDiagnosis",
                    "nillable": "true",
                    "type": "tns:BL_TranscriptDiagnosis"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_TranscriptDiagnosis": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_TranscriptDiagnosis"
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
                    "name": "lChartID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPatientDiagnosisID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iOrderBy",
                    "type": "s:int"
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
                    "name": "strComments",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lLastUpdatedByUserID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PatientMedication": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientMedication"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientMedication",
                    "nillable": "true",
                    "type": "tns:BL_PatientMedication"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientMedication": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientMedication"
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
                    "name": "lMedicationID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPatientDiagnosisID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStrength",
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
                    "name": "dtStartDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtStopDate",
                    "type": "s:dateTime"
                  }
                },
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
                    "name": "arrTranscriptMedication",
                    "type": "tns:ArrayOfBL_TranscriptMedication"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrPrescription",
                    "type": "tns:ArrayOfBL_PatientMedicationPrescription"
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
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSigProvider",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSigPatient",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSigID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_TranscriptMedication": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_TranscriptMedication"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_TranscriptMedication",
                    "nillable": "true",
                    "type": "tns:BL_TranscriptMedication"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_TranscriptMedication": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_TranscriptMedication"
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
                    "name": "lChartID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPatientMedicationID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iOrderBy",
                    "type": "s:int"
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
                    "name": "strComments",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lLastUpdatedByUserID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PatientVisitDiagnosis": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientVisitDiagnosis"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientVisitDiagnosis",
                    "nillable": "true",
                    "type": "tns:BL_PatientVisitDiagnosis"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientVisitDiagnosis": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientVisitDiagnosis"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPatientDiagnosisID",
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
                    "name": "lDiagnosisID",
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
                    "name": "bIsAcute",
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
                    "name": "dtStartDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtStopDate",
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
                    "name": "bIsTerminal",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lChartID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lVisitDiagnosisID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iOrderBy",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strVisitComments",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrTranscriptDiagnosis",
                    "type": "tns:ArrayOfBL_TranscriptDiagnosis"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PatientVisitMedication": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientVisitMedication"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientVisitMedication",
                    "nillable": "true",
                    "type": "tns:BL_PatientVisitMedication"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientVisitMedication": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientVisitMedication"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPatientMedicationID",
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
                    "name": "lMedicationID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lRelatedPatientDiagnosisID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strStrength",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtStartDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtStopDate",
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
                    "name": "lChartID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lVisitMedicationID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strVisitComments",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "iOrderBy",
                    "type": "s:int"
                  }
                },
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
                    "name": "arrPrescription",
                    "type": "tns:ArrayOfBL_PatientMedicationPrescription"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrTranscriptMedication",
                    "type": "tns:ArrayOfBL_TranscriptMedication"
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
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSigProvider",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSigPatient",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSigID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_AllergyGroup": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_AllergyGroup"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_AllergyGroup",
                    "nillable": "true",
                    "type": "tns:BL_AllergyGroup"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_AllergyGroup": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_AllergyGroup"
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
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_AllergyReactionGroup": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_AllergyReactionGroup"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_AllergyReactionGroup",
                    "nillable": "true",
                    "type": "tns:BL_AllergyReactionGroup"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_AllergyReactionGroup": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_AllergyReactionGroup"
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
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_AllergyReaction": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_AllergyReaction"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_AllergyReaction",
                    "nillable": "true",
                    "type": "tns:BL_AllergyReaction"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_AllergyReaction": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_AllergyReaction"
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
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lReactionGroupID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_AllergySeverity": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_AllergySeverity"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_AllergySeverity",
                    "nillable": "true",
                    "type": "tns:BL_AllergySeverity"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_AllergySeverity": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_AllergySeverity"
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
    "ArrayOfBL_AllergySubstance": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_AllergySubstance"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_AllergySubstance",
                    "nillable": "true",
                    "type": "tns:BL_AllergySubstance"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_AllergySubstance": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_AllergySubstance"
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
                    "name": "strKeywords",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lAllergyGroupID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_SigCommon": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_SigCommon"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_SigCommon",
                    "nillable": "true",
                    "type": "tns:BL_SigCommon"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_SigCommon": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_SigCommon"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSigID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSigProvider",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strSigPatient",
                    "type": "s:string"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_PatientAllergy": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_PatientAllergy"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_PatientAllergy",
                    "nillable": "true",
                    "type": "tns:BL_PatientAllergy"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_PatientAllergy": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_PatientAllergy"
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
                    "name": "lAllergySubstanceID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lReactionID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lSeverityID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtStartDate",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtStopDate",
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
                    "name": "bIsActive",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strNDC",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicationName",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "strMedicationCategory",
                    "type": "s:string"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lPatientMedicationID",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "arrTranscriptAllergy",
                    "type": "tns:ArrayOfBL_TranscriptAllergy"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtModifiedAt",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lModifiedBy",
                    "type": "s:long"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "bDrugInteractionAlert",
                    "type": "s:boolean"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lReactionGroupID",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_TranscriptAllergy": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_TranscriptAllergy"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_TranscriptAllergy",
                    "nillable": "true",
                    "type": "tns:BL_TranscriptAllergy"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_TranscriptAllergy": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_TranscriptAllergy"
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
                    "name": "lPatientAllergyID",
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
                    "name": "iDisplayOrder",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "dtModifiedAt",
                    "type": "s:dateTime"
                  }
                },
                {
                  "@": {
                    "minOccurs": "1",
                    "maxOccurs": "1",
                    "name": "lModifiedBy",
                    "type": "s:long"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "ArrayOfBL_OncProcedureCategory": {
      "s:complexType": [
        {
          "@": {
            "name": "ArrayOfBL_OncProcedureCategory"
          },
          "s:sequence": [
            {
              "s:element": [
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "unbounded",
                    "name": "BL_OncProcedureCategory",
                    "nillable": "true",
                    "type": "tns:BL_OncProcedureCategory"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "BL_OncProcedureCategory": {
      "s:complexType": [
        {
          "@": {
            "name": "BL_OncProcedureCategory"
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
                    "name": "iDisplayOrder",
                    "type": "s:int"
                  }
                },
                {
                  "@": {
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "name": "OncProcedures",
                    "type": "tns:ArrayOfBL_OncProcedure"
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
    "TemplateGetByID": {
      "@": {
        "name": "TemplateGetByID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_Template object for the corresponding Template ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:TemplateGetByIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:TemplateGetByIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/TemplateGetByID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:TemplateGetByID",
      "outtype": "tns:TemplateGetByIDResponse"
    },
    "TemplateSummaryGetByProviderID": {
      "@": {
        "name": "TemplateSummaryGetByProviderID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_TemplateSummary objects, given a Provider ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:TemplateSummaryGetByProviderIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:TemplateSummaryGetByProviderIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/TemplateSummaryGetByProviderID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:TemplateSummaryGetByProviderID",
      "outtype": "tns:TemplateSummaryGetByProviderIDResponse"
    },
    "TemplateSummaryGetPublic": {
      "@": {
        "name": "TemplateSummaryGetPublic"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of public BL_TemplateSummary objects.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:TemplateSummaryGetPublicSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:TemplateSummaryGetPublicSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/TemplateSummaryGetPublic",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:TemplateSummaryGetPublic",
      "outtype": "tns:TemplateSummaryGetPublicResponse"
    },
    "TemplateSummaryGetBySearchString": {
      "@": {
        "name": "TemplateSummaryGetBySearchString"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_TemplateSummary objects, given a Provider ID and search terms.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:TemplateSummaryGetBySearchStringSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:TemplateSummaryGetBySearchStringSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/TemplateSummaryGetBySearchString",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:TemplateSummaryGetBySearchString",
      "outtype": "tns:TemplateSummaryGetBySearchStringResponse"
    },
    "InsertTemplate": {
      "@": {
        "name": "InsertTemplate"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a new template.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:InsertTemplateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:InsertTemplateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/InsertTemplate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:InsertTemplate",
      "outtype": "tns:InsertTemplateResponse"
    },
    "ShareTemplates": {
      "@": {
        "name": "ShareTemplates"
      },
      "wsdl:documentation": [
        {
          "#": "Shares templates with other providers.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ShareTemplatesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ShareTemplatesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ShareTemplates",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ShareTemplates",
      "outtype": "tns:ShareTemplatesResponse"
    },
    "ClaimTemplate": {
      "@": {
        "name": "ClaimTemplate"
      },
      "wsdl:documentation": [
        {
          "#": "Claim a general template for a provider.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ClaimTemplateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ClaimTemplateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ClaimTemplate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ClaimTemplate",
      "outtype": "tns:ClaimTemplateResponse"
    },
    "UnclaimTemplate": {
      "@": {
        "name": "UnclaimTemplate"
      },
      "wsdl:documentation": [
        {
          "#": "Unclaim a general template for a provider.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UnclaimTemplateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UnclaimTemplateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UnclaimTemplate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UnclaimTemplate",
      "outtype": "tns:UnclaimTemplateResponse"
    },
    "UpdateTemplate": {
      "@": {
        "name": "UpdateTemplate"
      },
      "wsdl:documentation": [
        {
          "#": "Updates template.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdateTemplateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdateTemplateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdateTemplate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdateTemplate",
      "outtype": "tns:UpdateTemplateResponse"
    },
    "DeleteTemplate": {
      "@": {
        "name": "DeleteTemplate"
      },
      "wsdl:documentation": [
        {
          "#": "Deletes template.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DeleteTemplateSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DeleteTemplateSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DeleteTemplate",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DeleteTemplate",
      "outtype": "tns:DeleteTemplateResponse"
    },
    "ChartGetByID": {
      "@": {
        "name": "ChartGetByID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_Chart object for the corresponding Chart ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ChartGetByIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ChartGetByIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ChartGetByID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ChartGetByID",
      "outtype": "tns:ChartGetByIDResponse"
    },
    "ChartExtendedGetByID": {
      "@": {
        "name": "ChartExtendedGetByID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_ChartExtended object for the corresponding Chart ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ChartExtendedGetByIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ChartExtendedGetByIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ChartExtendedGetByID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ChartExtendedGetByID",
      "outtype": "tns:ChartExtendedGetByIDResponse"
    },
    "ChartAccessInsert": {
      "@": {
        "name": "ChartAccessInsert"
      },
      "wsdl:documentation": [
        {
          "#": "Records chart access, given the Patient and Practice IDs.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ChartAccessInsertSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ChartAccessInsertSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ChartAccessInsert",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ChartAccessInsert",
      "outtype": "tns:ChartAccessInsertResponse"
    },
    "GetChartsByPatient": {
      "@": {
        "name": "GetChartsByPatient"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_Chart objects, given a Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetChartsByPatientSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetChartsByPatientSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetChartsByPatient",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetChartsByPatient",
      "outtype": "tns:GetChartsByPatientResponse"
    },
    "ChartSummaryGetByPracticeAndPatient": {
      "@": {
        "name": "ChartSummaryGetByPracticeAndPatient"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_ChartSummary objects, given a Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ChartSummaryGetByPracticeAndPatientSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ChartSummaryGetByPracticeAndPatientSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ChartSummaryGetByPracticeAndPatient",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ChartSummaryGetByPracticeAndPatient",
      "outtype": "tns:ChartSummaryGetByPracticeAndPatientResponse"
    },
    "StartNewChart": {
      "@": {
        "name": "StartNewChart"
      },
      "wsdl:documentation": [
        {
          "#": "Starts a new chart (everything defaulted to null).",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:StartNewChartSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:StartNewChartSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/StartNewChart",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:StartNewChart",
      "outtype": "tns:StartNewChartResponse"
    },
    "SignChart": {
      "@": {
        "name": "SignChart"
      },
      "wsdl:documentation": [
        {
          "#": "Signs a chart (does NOT save pieces of the chart).",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:SignChartSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:SignChartSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/SignChart",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:SignChart",
      "outtype": "tns:SignChartResponse"
    },
    "DeleteChart": {
      "@": {
        "name": "DeleteChart"
      },
      "wsdl:documentation": [
        {
          "#": "Soft deletes a chart.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DeleteChartSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DeleteChartSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DeleteChart",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DeleteChart",
      "outtype": "tns:DeleteChartResponse"
    },
    "UpdateChartVitalsAndChiefComplaint": {
      "@": {
        "name": "UpdateChartVitalsAndChiefComplaint"
      },
      "wsdl:documentation": [
        {
          "#": "Updates the Chief Complaint field of a chart.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdateChartVitalsAndChiefComplaintSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdateChartVitalsAndChiefComplaintSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdateChartVitalsAndChiefComplaint",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdateChartVitalsAndChiefComplaint",
      "outtype": "tns:UpdateChartVitalsAndChiefComplaintResponse"
    },
    "UpdateChartIndividualSOAP": {
      "@": {
        "name": "UpdateChartIndividualSOAP"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a single SOAP field of a chart.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdateChartIndividualSOAPSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdateChartIndividualSOAPSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdateChartIndividualSOAP",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdateChartIndividualSOAP",
      "outtype": "tns:UpdateChartIndividualSOAPResponse"
    },
    "UpdateChartSOAP": {
      "@": {
        "name": "UpdateChartSOAP"
      },
      "wsdl:documentation": [
        {
          "#": "Updates SOAP fields of a chart.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdateChartSOAPSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdateChartSOAPSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdateChartSOAP",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdateChartSOAP",
      "outtype": "tns:UpdateChartSOAPResponse"
    },
    "UpdateChart": {
      "@": {
        "name": "UpdateChart"
      },
      "wsdl:documentation": [
        {
          "#": "Updates an entire chart.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdateChartSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdateChartSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdateChart",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdateChart",
      "outtype": "tns:UpdateChartResponse"
    },
    "UpdateChartSeenByProvider": {
      "@": {
        "name": "UpdateChartSeenByProvider"
      },
      "wsdl:documentation": [
        {
          "#": "Updates the seen by provider for a chart note.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdateChartSeenByProviderSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdateChartSeenByProviderSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdateChartSeenByProvider",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdateChartSeenByProvider",
      "outtype": "tns:UpdateChartSeenByProviderResponse"
    },
    "StandardVitalsGetByChartID": {
      "@": {
        "name": "StandardVitalsGetByChartID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_VitalsStandard object for the corresponding Chart ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:StandardVitalsGetByChartIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:StandardVitalsGetByChartIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/StandardVitalsGetByChartID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:StandardVitalsGetByChartID",
      "outtype": "tns:StandardVitalsGetByChartIDResponse"
    },
    "GetStandardVitalsByPatient": {
      "@": {
        "name": "GetStandardVitalsByPatient"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_VitalsStandard objects, given a Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetStandardVitalsByPatientSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetStandardVitalsByPatientSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetStandardVitalsByPatient",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetStandardVitalsByPatient",
      "outtype": "tns:GetStandardVitalsByPatientResponse"
    },
    "ChartAddendumGetByID": {
      "@": {
        "name": "ChartAddendumGetByID"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches the BL_ChartAddendum object for the corresponding ChartAddendumID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ChartAddendumGetByIDSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ChartAddendumGetByIDSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ChartAddendumGetByID",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ChartAddendumGetByID",
      "outtype": "tns:ChartAddendumGetByIDResponse"
    },
    "GetChartAddendaByChart": {
      "@": {
        "name": "GetChartAddendaByChart"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_ChartAddendum objects, given a Chart ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetChartAddendaByChartSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetChartAddendaByChartSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetChartAddendaByChart",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetChartAddendaByChart",
      "outtype": "tns:GetChartAddendaByChartResponse"
    },
    "InsertChartAddendum": {
      "@": {
        "name": "InsertChartAddendum"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a new chart addendum.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:InsertChartAddendumSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:InsertChartAddendumSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/InsertChartAddendum",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:InsertChartAddendum",
      "outtype": "tns:InsertChartAddendumResponse"
    },
    "GetChartTypesByPractice": {
      "@": {
        "name": "GetChartTypesByPractice"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_ChartType objects, given a Practice ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetChartTypesByPracticeSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetChartTypesByPracticeSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetChartTypesByPractice",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetChartTypesByPractice",
      "outtype": "tns:GetChartTypesByPracticeResponse"
    },
    "InsertChartType": {
      "@": {
        "name": "InsertChartType"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a new chart type.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:InsertChartTypeSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:InsertChartTypeSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/InsertChartType",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:InsertChartType",
      "outtype": "tns:InsertChartTypeResponse"
    },
    "UpdateChartType": {
      "@": {
        "name": "UpdateChartType"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a practice's chart type.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdateChartTypeSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdateChartTypeSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdateChartType",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdateChartType",
      "outtype": "tns:UpdateChartTypeResponse"
    },
    "DiagnosisGetBySearchString": {
      "@": {
        "name": "DiagnosisGetBySearchString"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_Diagnosis objects, given search terms.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DiagnosisGetBySearchStringSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DiagnosisGetBySearchStringSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DiagnosisGetBySearchString",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DiagnosisGetBySearchString",
      "outtype": "tns:DiagnosisGetBySearchStringResponse"
    },
    "DiagnosisGetFrequentByProvider": {
      "@": {
        "name": "DiagnosisGetFrequentByProvider"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_Diagnosis objects, by provider.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DiagnosisGetFrequentByProviderSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DiagnosisGetFrequentByProviderSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DiagnosisGetFrequentByProvider",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DiagnosisGetFrequentByProvider",
      "outtype": "tns:DiagnosisGetFrequentByProviderResponse"
    },
    "DiagnosisGetFrequentByPatient": {
      "@": {
        "name": "DiagnosisGetFrequentByPatient"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_Diagnosis objects, by patient id.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DiagnosisGetFrequentByPatientSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DiagnosisGetFrequentByPatientSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DiagnosisGetFrequentByPatient",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DiagnosisGetFrequentByPatient",
      "outtype": "tns:DiagnosisGetFrequentByPatientResponse"
    },
    "DrugSearchResultGetBySearchString": {
      "@": {
        "name": "DrugSearchResultGetBySearchString"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_Medication objects, given search terms.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DrugSearchResultGetBySearchStringSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DrugSearchResultGetBySearchStringSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DrugSearchResultGetBySearchString",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DrugSearchResultGetBySearchString",
      "outtype": "tns:DrugSearchResultGetBySearchStringResponse"
    },
    "DrugSearchGetFrequentByProvider": {
      "@": {
        "name": "DrugSearchGetFrequentByProvider"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_DrugSearchResult objects, by provider.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DrugSearchGetFrequentByProviderSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DrugSearchGetFrequentByProviderSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DrugSearchGetFrequentByProvider",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DrugSearchGetFrequentByProvider",
      "outtype": "tns:DrugSearchGetFrequentByProviderResponse"
    },
    "GetPatientMedicationPrescriptions": {
      "@": {
        "name": "GetPatientMedicationPrescriptions"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_PatientMedicationPrescription objects, given a PatientMedicationID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientMedicationPrescriptionsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientMedicationPrescriptionsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientMedicationPrescriptions",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetPatientMedicationPrescriptions",
      "outtype": "tns:GetPatientMedicationPrescriptionsResponse"
    },
    "GetPatientMedicationPrescription": {
      "@": {
        "name": "GetPatientMedicationPrescription"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a BL_PatientMedicationPrescription object, given a PatientMedicationPrescriptionID and PatientID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientMedicationPrescriptionSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientMedicationPrescriptionSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientMedicationPrescription",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetPatientMedicationPrescription",
      "outtype": "tns:GetPatientMedicationPrescriptionResponse"
    },
    "InsertPatientMedicationPrescription": {
      "@": {
        "name": "InsertPatientMedicationPrescription"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a new patient medication prescription.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:InsertPatientMedicationPrescriptionSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:InsertPatientMedicationPrescriptionSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/InsertPatientMedicationPrescription",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:InsertPatientMedicationPrescription",
      "outtype": "tns:InsertPatientMedicationPrescriptionResponse"
    },
    "UpdatePatientMedicationPrescription": {
      "@": {
        "name": "UpdatePatientMedicationPrescription"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a patient medication prescription.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdatePatientMedicationPrescriptionSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdatePatientMedicationPrescriptionSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdatePatientMedicationPrescription",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdatePatientMedicationPrescription",
      "outtype": "tns:UpdatePatientMedicationPrescriptionResponse"
    },
    "DeletePatientMedicationPrescription": {
      "@": {
        "name": "DeletePatientMedicationPrescription"
      },
      "wsdl:documentation": [
        {
          "#": "Deletes patient medication prescription.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DeletePatientMedicationPrescriptionSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DeletePatientMedicationPrescriptionSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DeletePatientMedicationPrescription",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DeletePatientMedicationPrescription",
      "outtype": "tns:DeletePatientMedicationPrescriptionResponse"
    },
    "ServiceGetBySearchString": {
      "@": {
        "name": "ServiceGetBySearchString"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_ServiceSummary objects, given search terms.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ServiceGetBySearchStringSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ServiceGetBySearchStringSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ServiceGetBySearchString",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ServiceGetBySearchString",
      "outtype": "tns:ServiceGetBySearchStringResponse"
    },
    "ServiceGetFrequent": {
      "@": {
        "name": "ServiceGetFrequent"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of common BL_ServiceSummary objects.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ServiceGetFrequentSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ServiceGetFrequentSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ServiceGetFrequent",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ServiceGetFrequent",
      "outtype": "tns:ServiceGetFrequentResponse"
    },
    "ServiceGetFrequentByProvider": {
      "@": {
        "name": "ServiceGetFrequentByProvider"
      },
      "wsdl:documentation": [
        {
          "#": "Returns a list of a provider's most frequently used BL_ServiceSummary objects.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:ServiceGetFrequentByProviderSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:ServiceGetFrequentByProviderSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/ServiceGetFrequentByProvider",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:ServiceGetFrequentByProvider",
      "outtype": "tns:ServiceGetFrequentByProviderResponse"
    },
    "BillingTermsGetByChart": {
      "@": {
        "name": "BillingTermsGetByChart"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches billing terms for a chart note, given transcript ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:BillingTermsGetByChartSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:BillingTermsGetByChartSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/BillingTermsGetByChart",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:BillingTermsGetByChart",
      "outtype": "tns:BillingTermsGetByChartResponse"
    },
    "BillingTermsSave": {
      "@": {
        "name": "BillingTermsSave"
      },
      "wsdl:documentation": [
        {
          "#": "Saves billing terms, given transcript ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:BillingTermsSaveSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:BillingTermsSaveSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/BillingTermsSave",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:BillingTermsSave",
      "outtype": "tns:BillingTermsSaveResponse"
    },
    "GetPatientDiagnoses": {
      "@": {
        "name": "GetPatientDiagnoses"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_PatientDiagnosis objects, given a Practice ID and Patient ID. Chart ID is optional",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientDiagnosesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientDiagnosesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientDiagnoses",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetPatientDiagnoses",
      "outtype": "tns:GetPatientDiagnosesResponse"
    },
    "GetRelatedMedications_new": {
      "@": {
        "name": "GetRelatedMedications_new"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_PatientMedication objects, given a PatientDiagnosisID",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetRelatedMedications_newSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetRelatedMedications_newSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetRelatedMedications_new",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetRelatedMedications_new",
      "outtype": "tns:GetRelatedMedications_newResponse"
    },
    "GetPatientVisitDiagnoses": {
      "@": {
        "name": "GetPatientVisitDiagnoses"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_PatientVisitDiagnosis objects, given a Practice ID and Patient ID. Chart ID is optional",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientVisitDiagnosesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientVisitDiagnosesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientVisitDiagnoses",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetPatientVisitDiagnoses",
      "outtype": "tns:GetPatientVisitDiagnosesResponse"
    },
    "OrderPatientVisitDiagnoses": {
      "@": {
        "name": "OrderPatientVisitDiagnoses"
      },
      "wsdl:documentation": [
        {
          "#": "Orders the Diagnoses in a Patient's Chart Note",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:OrderPatientVisitDiagnosesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:OrderPatientVisitDiagnosesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/OrderPatientVisitDiagnoses",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:OrderPatientVisitDiagnoses",
      "outtype": "tns:OrderPatientVisitDiagnosesResponse"
    },
    "InsertPatientVisitDiagnosis": {
      "@": {
        "name": "InsertPatientVisitDiagnosis"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a new patient diagnosis.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:InsertPatientVisitDiagnosisSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:InsertPatientVisitDiagnosisSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/InsertPatientVisitDiagnosis",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:InsertPatientVisitDiagnosis",
      "outtype": "tns:InsertPatientVisitDiagnosisResponse"
    },
    "InsertPatientVisitDiagnoses": {
      "@": {
        "name": "InsertPatientVisitDiagnoses"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts new patient visit diagnoses.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:InsertPatientVisitDiagnosesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:InsertPatientVisitDiagnosesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/InsertPatientVisitDiagnoses",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:InsertPatientVisitDiagnoses",
      "outtype": "tns:InsertPatientVisitDiagnosesResponse"
    },
    "UpdatePatientVisitDiagnosis": {
      "@": {
        "name": "UpdatePatientVisitDiagnosis"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a patient diagnosis.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdatePatientVisitDiagnosisSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdatePatientVisitDiagnosisSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdatePatientVisitDiagnosis",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdatePatientVisitDiagnosis",
      "outtype": "tns:UpdatePatientVisitDiagnosisResponse"
    },
    "DeletePatientVisitDiagnosis": {
      "@": {
        "name": "DeletePatientVisitDiagnosis"
      },
      "wsdl:documentation": [
        {
          "#": "Deletes patient diagnosis.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DeletePatientVisitDiagnosisSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DeletePatientVisitDiagnosisSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DeletePatientVisitDiagnosis",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DeletePatientVisitDiagnosis",
      "outtype": "tns:DeletePatientVisitDiagnosisResponse"
    },
    "GetPatientMedications": {
      "@": {
        "name": "GetPatientMedications"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_PatientMedication objects, given a Practice ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientMedicationsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientMedicationsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientMedications",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetPatientMedications",
      "outtype": "tns:GetPatientMedicationsResponse"
    },
    "GetPatientVisitMedications": {
      "@": {
        "name": "GetPatientVisitMedications"
      },
      "wsdl:documentation": [
        {
          "#": "Fetches a list of BL_PatientVisitMedication objects, given a Chart ID and Patient ID.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientVisitMedicationsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientVisitMedicationsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientVisitMedications",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetPatientVisitMedications",
      "outtype": "tns:GetPatientVisitMedicationsResponse"
    },
    "OrderPatientVisitMedications": {
      "@": {
        "name": "OrderPatientVisitMedications"
      },
      "wsdl:documentation": [
        {
          "#": "Orders the Medications in a Patient's Chart Note",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:OrderPatientVisitMedicationsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:OrderPatientVisitMedicationsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/OrderPatientVisitMedications",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:OrderPatientVisitMedications",
      "outtype": "tns:OrderPatientVisitMedicationsResponse"
    },
    "InsertPatientVisitMedication": {
      "@": {
        "name": "InsertPatientVisitMedication"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts a new patient medication.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:InsertPatientVisitMedicationSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:InsertPatientVisitMedicationSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/InsertPatientVisitMedication",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:InsertPatientVisitMedication",
      "outtype": "tns:InsertPatientVisitMedicationResponse"
    },
    "InsertPatientVisitMedications": {
      "@": {
        "name": "InsertPatientVisitMedications"
      },
      "wsdl:documentation": [
        {
          "#": "Inserts new patient visit medications.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:InsertPatientVisitMedicationsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:InsertPatientVisitMedicationsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/InsertPatientVisitMedications",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:InsertPatientVisitMedications",
      "outtype": "tns:InsertPatientVisitMedicationsResponse"
    },
    "UpdatePatientVisitMedication": {
      "@": {
        "name": "UpdatePatientVisitMedication"
      },
      "wsdl:documentation": [
        {
          "#": "Updates a patient medication.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdatePatientVisitMedicationSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdatePatientVisitMedicationSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdatePatientVisitMedication",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdatePatientVisitMedication",
      "outtype": "tns:UpdatePatientVisitMedicationResponse"
    },
    "DeletePatientVisitMedication": {
      "@": {
        "name": "DeletePatientVisitMedication"
      },
      "wsdl:documentation": [
        {
          "#": "Deletes patient medication.",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DeletePatientVisitMedicationSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DeletePatientVisitMedicationSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DeletePatientVisitMedication",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DeletePatientVisitMedication",
      "outtype": "tns:DeletePatientVisitMedicationResponse"
    },
    "GetAllergyGroups": {
      "@": {
        "name": "GetAllergyGroups"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetAllergyGroupsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetAllergyGroupsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetAllergyGroups",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetAllergyGroups",
      "outtype": "tns:GetAllergyGroupsResponse"
    },
    "GetAllergyReactionGroups": {
      "@": {
        "name": "GetAllergyReactionGroups"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetAllergyReactionGroupsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetAllergyReactionGroupsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetAllergyReactionGroups",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetAllergyReactionGroups",
      "outtype": "tns:GetAllergyReactionGroupsResponse"
    },
    "GetAllergyReactions": {
      "@": {
        "name": "GetAllergyReactions"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetAllergyReactionsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetAllergyReactionsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetAllergyReactions",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetAllergyReactions",
      "outtype": "tns:GetAllergyReactionsResponse"
    },
    "GetAllergySeverity": {
      "@": {
        "name": "GetAllergySeverity"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetAllergySeveritySoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetAllergySeveritySoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetAllergySeverity",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetAllergySeverity",
      "outtype": "tns:GetAllergySeverityResponse"
    },
    "GetAllergySubstances": {
      "@": {
        "name": "GetAllergySubstances"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetAllergySubstancesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetAllergySubstancesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetAllergySubstances",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetAllergySubstances",
      "outtype": "tns:GetAllergySubstancesResponse"
    },
    "GetCommonSigs": {
      "@": {
        "name": "GetCommonSigs"
      },
      "wsdl:documentation": [
        {
          "#": "Gets the list of common SIGs",
          "@": {
            "xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/"
          }
        }
      ],
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetCommonSigsSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetCommonSigsSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetCommonSigs",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetCommonSigs",
      "outtype": "tns:GetCommonSigsResponse"
    },
    "GetPatientAllergies": {
      "@": {
        "name": "GetPatientAllergies"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientAllergiesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientAllergiesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientAllergies",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetPatientAllergies",
      "outtype": "tns:GetPatientAllergiesResponse"
    },
    "GetPatientAllergiesOrderForTranscript": {
      "@": {
        "name": "GetPatientAllergiesOrderForTranscript"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetPatientAllergiesOrderForTranscriptSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetPatientAllergiesOrderForTranscriptSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientAllergiesOrderForTranscript",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetPatientAllergiesOrderForTranscript",
      "outtype": "tns:GetPatientAllergiesOrderForTranscriptResponse"
    },
    "SavePatientAllergy": {
      "@": {
        "name": "SavePatientAllergy"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:SavePatientAllergySoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:SavePatientAllergySoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/SavePatientAllergy",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:SavePatientAllergy",
      "outtype": "tns:SavePatientAllergyResponse"
    },
    "SavePatientAllergiesForTranscript": {
      "@": {
        "name": "SavePatientAllergiesForTranscript"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:SavePatientAllergiesForTranscriptSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:SavePatientAllergiesForTranscriptSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/SavePatientAllergiesForTranscript",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:SavePatientAllergiesForTranscript",
      "outtype": "tns:SavePatientAllergiesForTranscriptResponse"
    },
    "DeletePatientAllergy": {
      "@": {
        "name": "DeletePatientAllergy"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:DeletePatientAllergySoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:DeletePatientAllergySoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/DeletePatientAllergy",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:DeletePatientAllergy",
      "outtype": "tns:DeletePatientAllergyResponse"
    },
    "OrderPatientAllergiesInTranscript": {
      "@": {
        "name": "OrderPatientAllergiesInTranscript"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:OrderPatientAllergiesInTranscriptSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:OrderPatientAllergiesInTranscriptSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/OrderPatientAllergiesInTranscript",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:OrderPatientAllergiesInTranscript",
      "outtype": "tns:OrderPatientAllergiesInTranscriptResponse"
    },
    "GetOncProceduresForTranscript": {
      "@": {
        "name": "GetOncProceduresForTranscript"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetOncProceduresForTranscriptSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetOncProceduresForTranscriptSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetOncProceduresForTranscript",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetOncProceduresForTranscript",
      "outtype": "tns:GetOncProceduresForTranscriptResponse"
    },
    "UpdateOncProceduresForTranscript": {
      "@": {
        "name": "UpdateOncProceduresForTranscript"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:UpdateOncProceduresForTranscriptSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:UpdateOncProceduresForTranscriptSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/UpdateOncProceduresForTranscript",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:UpdateOncProceduresForTranscript",
      "outtype": "tns:UpdateOncProceduresForTranscriptResponse"
    },
    "GetOncProcedureCategories": {
      "@": {
        "name": "GetOncProcedureCategories"
      },
      "wsdl:input": [
        {
          "@": {
            "message": "tns:GetOncProcedureCategoriesSoapIn"
          }
        }
      ],
      "wsdl:output": [
        {
          "@": {
            "message": "tns:GetOncProcedureCategoriesSoapOut"
          }
        }
      ],
      "soapAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetOncProcedureCategories",
      "service": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
      "intype": "tns:GetOncProcedureCategories",
      "outtype": "tns:GetOncProcedureCategoriesResponse"
    }
  },
  "services": {
    "tns:ChartSoap": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
    "tns:ChartSoap12": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
    "tns:ChartHttpGet": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx",
    "tns:ChartHttpPost": "https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx"
  },
  "messages": {
    "TemplateGetByIDSoapIn": "tns:TemplateGetByID",
    "TemplateGetByIDSoapOut": "tns:TemplateGetByIDResponse",
    "TemplateSummaryGetByProviderIDSoapIn": "tns:TemplateSummaryGetByProviderID",
    "TemplateSummaryGetByProviderIDSoapOut": "tns:TemplateSummaryGetByProviderIDResponse",
    "TemplateSummaryGetPublicSoapIn": "tns:TemplateSummaryGetPublic",
    "TemplateSummaryGetPublicSoapOut": "tns:TemplateSummaryGetPublicResponse",
    "TemplateSummaryGetBySearchStringSoapIn": "tns:TemplateSummaryGetBySearchString",
    "TemplateSummaryGetBySearchStringSoapOut": "tns:TemplateSummaryGetBySearchStringResponse",
    "InsertTemplateSoapIn": "tns:InsertTemplate",
    "InsertTemplateSoapOut": "tns:InsertTemplateResponse",
    "ShareTemplatesSoapIn": "tns:ShareTemplates",
    "ShareTemplatesSoapOut": "tns:ShareTemplatesResponse",
    "ClaimTemplateSoapIn": "tns:ClaimTemplate",
    "ClaimTemplateSoapOut": "tns:ClaimTemplateResponse",
    "UnclaimTemplateSoapIn": "tns:UnclaimTemplate",
    "UnclaimTemplateSoapOut": "tns:UnclaimTemplateResponse",
    "UpdateTemplateSoapIn": "tns:UpdateTemplate",
    "UpdateTemplateSoapOut": "tns:UpdateTemplateResponse",
    "DeleteTemplateSoapIn": "tns:DeleteTemplate",
    "DeleteTemplateSoapOut": "tns:DeleteTemplateResponse",
    "ChartGetByIDSoapIn": "tns:ChartGetByID",
    "ChartGetByIDSoapOut": "tns:ChartGetByIDResponse",
    "ChartExtendedGetByIDSoapIn": "tns:ChartExtendedGetByID",
    "ChartExtendedGetByIDSoapOut": "tns:ChartExtendedGetByIDResponse",
    "ChartAccessInsertSoapIn": "tns:ChartAccessInsert",
    "ChartAccessInsertSoapOut": "tns:ChartAccessInsertResponse",
    "GetChartsByPatientSoapIn": "tns:GetChartsByPatient",
    "GetChartsByPatientSoapOut": "tns:GetChartsByPatientResponse",
    "ChartSummaryGetByPracticeAndPatientSoapIn": "tns:ChartSummaryGetByPracticeAndPatient",
    "ChartSummaryGetByPracticeAndPatientSoapOut": "tns:ChartSummaryGetByPracticeAndPatientResponse",
    "StartNewChartSoapIn": "tns:StartNewChart",
    "StartNewChartSoapOut": "tns:StartNewChartResponse",
    "SignChartSoapIn": "tns:SignChart",
    "SignChartSoapOut": "tns:SignChartResponse",
    "DeleteChartSoapIn": "tns:DeleteChart",
    "DeleteChartSoapOut": "tns:DeleteChartResponse",
    "UpdateChartVitalsAndChiefComplaintSoapIn": "tns:UpdateChartVitalsAndChiefComplaint",
    "UpdateChartVitalsAndChiefComplaintSoapOut": "tns:UpdateChartVitalsAndChiefComplaintResponse",
    "UpdateChartIndividualSOAPSoapIn": "tns:UpdateChartIndividualSOAP",
    "UpdateChartIndividualSOAPSoapOut": "tns:UpdateChartIndividualSOAPResponse",
    "UpdateChartSOAPSoapIn": "tns:UpdateChartSOAP",
    "UpdateChartSOAPSoapOut": "tns:UpdateChartSOAPResponse",
    "UpdateChartSoapIn": "tns:UpdateChart",
    "UpdateChartSoapOut": "tns:UpdateChartResponse",
    "UpdateChartSeenByProviderSoapIn": "tns:UpdateChartSeenByProvider",
    "UpdateChartSeenByProviderSoapOut": "tns:UpdateChartSeenByProviderResponse",
    "StandardVitalsGetByChartIDSoapIn": "tns:StandardVitalsGetByChartID",
    "StandardVitalsGetByChartIDSoapOut": "tns:StandardVitalsGetByChartIDResponse",
    "GetStandardVitalsByPatientSoapIn": "tns:GetStandardVitalsByPatient",
    "GetStandardVitalsByPatientSoapOut": "tns:GetStandardVitalsByPatientResponse",
    "ChartAddendumGetByIDSoapIn": "tns:ChartAddendumGetByID",
    "ChartAddendumGetByIDSoapOut": "tns:ChartAddendumGetByIDResponse",
    "GetChartAddendaByChartSoapIn": "tns:GetChartAddendaByChart",
    "GetChartAddendaByChartSoapOut": "tns:GetChartAddendaByChartResponse",
    "InsertChartAddendumSoapIn": "tns:InsertChartAddendum",
    "InsertChartAddendumSoapOut": "tns:InsertChartAddendumResponse",
    "GetChartTypesByPracticeSoapIn": "tns:GetChartTypesByPractice",
    "GetChartTypesByPracticeSoapOut": "tns:GetChartTypesByPracticeResponse",
    "InsertChartTypeSoapIn": "tns:InsertChartType",
    "InsertChartTypeSoapOut": "tns:InsertChartTypeResponse",
    "UpdateChartTypeSoapIn": "tns:UpdateChartType",
    "UpdateChartTypeSoapOut": "tns:UpdateChartTypeResponse",
    "DiagnosisGetBySearchStringSoapIn": "tns:DiagnosisGetBySearchString",
    "DiagnosisGetBySearchStringSoapOut": "tns:DiagnosisGetBySearchStringResponse",
    "DiagnosisGetFrequentByProviderSoapIn": "tns:DiagnosisGetFrequentByProvider",
    "DiagnosisGetFrequentByProviderSoapOut": "tns:DiagnosisGetFrequentByProviderResponse",
    "DiagnosisGetFrequentByPatientSoapIn": "tns:DiagnosisGetFrequentByPatient",
    "DiagnosisGetFrequentByPatientSoapOut": "tns:DiagnosisGetFrequentByPatientResponse",
    "DrugSearchResultGetBySearchStringSoapIn": "tns:DrugSearchResultGetBySearchString",
    "DrugSearchResultGetBySearchStringSoapOut": "tns:DrugSearchResultGetBySearchStringResponse",
    "DrugSearchGetFrequentByProviderSoapIn": "tns:DrugSearchGetFrequentByProvider",
    "DrugSearchGetFrequentByProviderSoapOut": "tns:DrugSearchGetFrequentByProviderResponse",
    "GetPatientMedicationPrescriptionsSoapIn": "tns:GetPatientMedicationPrescriptions",
    "GetPatientMedicationPrescriptionsSoapOut": "tns:GetPatientMedicationPrescriptionsResponse",
    "GetPatientMedicationPrescriptionSoapIn": "tns:GetPatientMedicationPrescription",
    "GetPatientMedicationPrescriptionSoapOut": "tns:GetPatientMedicationPrescriptionResponse",
    "InsertPatientMedicationPrescriptionSoapIn": "tns:InsertPatientMedicationPrescription",
    "InsertPatientMedicationPrescriptionSoapOut": "tns:InsertPatientMedicationPrescriptionResponse",
    "UpdatePatientMedicationPrescriptionSoapIn": "tns:UpdatePatientMedicationPrescription",
    "UpdatePatientMedicationPrescriptionSoapOut": "tns:UpdatePatientMedicationPrescriptionResponse",
    "DeletePatientMedicationPrescriptionSoapIn": "tns:DeletePatientMedicationPrescription",
    "DeletePatientMedicationPrescriptionSoapOut": "tns:DeletePatientMedicationPrescriptionResponse",
    "ServiceGetBySearchStringSoapIn": "tns:ServiceGetBySearchString",
    "ServiceGetBySearchStringSoapOut": "tns:ServiceGetBySearchStringResponse",
    "ServiceGetFrequentSoapIn": "tns:ServiceGetFrequent",
    "ServiceGetFrequentSoapOut": "tns:ServiceGetFrequentResponse",
    "ServiceGetFrequentByProviderSoapIn": "tns:ServiceGetFrequentByProvider",
    "ServiceGetFrequentByProviderSoapOut": "tns:ServiceGetFrequentByProviderResponse",
    "BillingTermsGetByChartSoapIn": "tns:BillingTermsGetByChart",
    "BillingTermsGetByChartSoapOut": "tns:BillingTermsGetByChartResponse",
    "BillingTermsSaveSoapIn": "tns:BillingTermsSave",
    "BillingTermsSaveSoapOut": "tns:BillingTermsSaveResponse",
    "GetPatientDiagnosesSoapIn": "tns:GetPatientDiagnoses",
    "GetPatientDiagnosesSoapOut": "tns:GetPatientDiagnosesResponse",
    "GetRelatedMedications_newSoapIn": "tns:GetRelatedMedications_new",
    "GetRelatedMedications_newSoapOut": "tns:GetRelatedMedications_newResponse",
    "GetPatientVisitDiagnosesSoapIn": "tns:GetPatientVisitDiagnoses",
    "GetPatientVisitDiagnosesSoapOut": "tns:GetPatientVisitDiagnosesResponse",
    "OrderPatientVisitDiagnosesSoapIn": "tns:OrderPatientVisitDiagnoses",
    "OrderPatientVisitDiagnosesSoapOut": "tns:OrderPatientVisitDiagnosesResponse",
    "InsertPatientVisitDiagnosisSoapIn": "tns:InsertPatientVisitDiagnosis",
    "InsertPatientVisitDiagnosisSoapOut": "tns:InsertPatientVisitDiagnosisResponse",
    "InsertPatientVisitDiagnosesSoapIn": "tns:InsertPatientVisitDiagnoses",
    "InsertPatientVisitDiagnosesSoapOut": "tns:InsertPatientVisitDiagnosesResponse",
    "UpdatePatientVisitDiagnosisSoapIn": "tns:UpdatePatientVisitDiagnosis",
    "UpdatePatientVisitDiagnosisSoapOut": "tns:UpdatePatientVisitDiagnosisResponse",
    "DeletePatientVisitDiagnosisSoapIn": "tns:DeletePatientVisitDiagnosis",
    "DeletePatientVisitDiagnosisSoapOut": "tns:DeletePatientVisitDiagnosisResponse",
    "GetPatientMedicationsSoapIn": "tns:GetPatientMedications",
    "GetPatientMedicationsSoapOut": "tns:GetPatientMedicationsResponse",
    "GetPatientVisitMedicationsSoapIn": "tns:GetPatientVisitMedications",
    "GetPatientVisitMedicationsSoapOut": "tns:GetPatientVisitMedicationsResponse",
    "OrderPatientVisitMedicationsSoapIn": "tns:OrderPatientVisitMedications",
    "OrderPatientVisitMedicationsSoapOut": "tns:OrderPatientVisitMedicationsResponse",
    "InsertPatientVisitMedicationSoapIn": "tns:InsertPatientVisitMedication",
    "InsertPatientVisitMedicationSoapOut": "tns:InsertPatientVisitMedicationResponse",
    "InsertPatientVisitMedicationsSoapIn": "tns:InsertPatientVisitMedications",
    "InsertPatientVisitMedicationsSoapOut": "tns:InsertPatientVisitMedicationsResponse",
    "UpdatePatientVisitMedicationSoapIn": "tns:UpdatePatientVisitMedication",
    "UpdatePatientVisitMedicationSoapOut": "tns:UpdatePatientVisitMedicationResponse",
    "DeletePatientVisitMedicationSoapIn": "tns:DeletePatientVisitMedication",
    "DeletePatientVisitMedicationSoapOut": "tns:DeletePatientVisitMedicationResponse",
    "GetAllergyGroupsSoapIn": "tns:GetAllergyGroups",
    "GetAllergyGroupsSoapOut": "tns:GetAllergyGroupsResponse",
    "GetAllergyReactionGroupsSoapIn": "tns:GetAllergyReactionGroups",
    "GetAllergyReactionGroupsSoapOut": "tns:GetAllergyReactionGroupsResponse",
    "GetAllergyReactionsSoapIn": "tns:GetAllergyReactions",
    "GetAllergyReactionsSoapOut": "tns:GetAllergyReactionsResponse",
    "GetAllergySeveritySoapIn": "tns:GetAllergySeverity",
    "GetAllergySeveritySoapOut": "tns:GetAllergySeverityResponse",
    "GetAllergySubstancesSoapIn": "tns:GetAllergySubstances",
    "GetAllergySubstancesSoapOut": "tns:GetAllergySubstancesResponse",
    "GetCommonSigsSoapIn": "tns:GetCommonSigs",
    "GetCommonSigsSoapOut": "tns:GetCommonSigsResponse",
    "GetPatientAllergiesSoapIn": "tns:GetPatientAllergies",
    "GetPatientAllergiesSoapOut": "tns:GetPatientAllergiesResponse",
    "GetPatientAllergiesOrderForTranscriptSoapIn": "tns:GetPatientAllergiesOrderForTranscript",
    "GetPatientAllergiesOrderForTranscriptSoapOut": "tns:GetPatientAllergiesOrderForTranscriptResponse",
    "SavePatientAllergySoapIn": "tns:SavePatientAllergy",
    "SavePatientAllergySoapOut": "tns:SavePatientAllergyResponse",
    "SavePatientAllergiesForTranscriptSoapIn": "tns:SavePatientAllergiesForTranscript",
    "SavePatientAllergiesForTranscriptSoapOut": "tns:SavePatientAllergiesForTranscriptResponse",
    "DeletePatientAllergySoapIn": "tns:DeletePatientAllergy",
    "DeletePatientAllergySoapOut": "tns:DeletePatientAllergyResponse",
    "OrderPatientAllergiesInTranscriptSoapIn": "tns:OrderPatientAllergiesInTranscript",
    "OrderPatientAllergiesInTranscriptSoapOut": "tns:OrderPatientAllergiesInTranscriptResponse",
    "GetOncProceduresForTranscriptSoapIn": "tns:GetOncProceduresForTranscript",
    "GetOncProceduresForTranscriptSoapOut": "tns:GetOncProceduresForTranscriptResponse",
    "UpdateOncProceduresForTranscriptSoapIn": "tns:UpdateOncProceduresForTranscript",
    "UpdateOncProceduresForTranscriptSoapOut": "tns:UpdateOncProceduresForTranscriptResponse",
    "GetOncProcedureCategoriesSoapIn": "tns:GetOncProcedureCategories",
    "GetOncProcedureCategoriesSoapOut": "tns:GetOncProcedureCategoriesResponse"
  }
}
WSDL_Interface.add(PF.Chart);
