define({ "api": [
  {
    "type": "get",
    "url": "/profiles/:profile_id/survey/questions/:question_id",
    "title": "Show",
    "name": "Show",
    "group": "Questions",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "profile_id",
            "description": "<p>Profile identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "question_id",
            "description": "<p>Question identifier.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Question uuid identifier.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Question label text.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "extra_text",
            "description": "<p>Question extra text.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "custom_field_1",
            "description": "<p>Question custom_field_1</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Question active status. If true, question will display in the survey.</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "sort_odrer",
            "description": "<p>Question sort_order. Will be used to sort questions to be displayed in the survey.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Questions options.</p>"
          },
          {
            "group": "200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>Question creation date.</p>"
          },
          {
            "group": "200",
            "type": "DateTime",
            "optional": false,
            "field": "update_at",
            "description": "<p>Question last update date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response",
          "content": "{\n  \"question\":{\n    \"id\": \"e0fa25b8-4097-40c2-8cac-be72631f8372\",\n    \"label\":\"Question label 2\",\n    \"extra_text\":\"Question extra text 2\",\n    \"field_type\":\"text\",\n    \"custom_field_1\":null,\n    \"active\":true,\n    \"sort_order\":2,\n    \"options\":{\n      \"required\":true\n    },\n    \"created_at\":\"2017-09-01T10:05:00.000Z\",\n    \"updated_at\":\"2017-09-01T10:05:00.000Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/api/v2/questions_controller.rb",
    "groupTitle": "Questions"
  },
  {
    "type": "put",
    "url": "/profiles/:profile_id/survey/questions/:question_id",
    "title": "Update",
    "name": "Update",
    "group": "Questions",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "profile_id",
            "description": "<p>Profile identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "question_id",
            "description": "<p>Question identifier uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..256",
            "optional": false,
            "field": "label",
            "description": "<p>Question text.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..256",
            "optional": true,
            "field": "extra_text",
            "description": "<p>Tooltip text.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"text\"",
              "\"rating_scale\""
            ],
            "optional": false,
            "field": "field_type",
            "description": "<p>Type of question to create.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-10000",
            "optional": false,
            "field": "sort_order",
            "description": "<p>Questions are displayed by this value in ascending order</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "active",
            "description": "<p>Wether to show or hide the question in the survey.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "..256",
            "optional": false,
            "field": "custom_field_1",
            "description": "<p>Can take any value. For client's internal use</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Set of options to customize question behavior.</p>"
          },
          {
            "group": "Parameter",
            "type": "FieldOptions",
            "optional": false,
            "field": "options.text",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "options.text.placeholder",
            "description": "<p>Defines content for the placeholder attribute for the text field.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "options.text.required",
            "description": "<p>Set to any string to mark the field as mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "FieldOptions",
            "optional": false,
            "field": "options.rating_scale",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1..10",
            "optional": false,
            "field": "options.rating_scale.best_rating",
            "description": "<p>Upper limit to the range of scoring options to display. Cannot be equal or lower than <code>worst_rating</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..10",
            "optional": false,
            "field": "options.rating_scale.worst_rating",
            "description": "<p>Lower limit to the range of scoring options to display. Cannot be equal or greater than <code>best_rating</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "options.rating_scale.best_label",
            "description": "<p>Text to display below the last (and highest) radio button label.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "options.rating_scale.worst_label",
            "description": "<p>Text to display below the last (and highest) radio button label.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "options.rating_scale.required",
            "description": "<p>Set to any string to mark the field as mandatory.</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/api/v2/questions_controller.rb",
    "groupTitle": "Questions"
  },
  {
    "type": "get",
    "url": "/profiles/:profile_id/survey/responses",
    "title": "List",
    "name": "List",
    "group": "SurveyResponses",
    "version": "2.0.0",
    "description": "<p>This endpoint returns survey responses for the selected profile. Returns 15 responses per page.</p> <p>To request a specific page, request it's number in the <code>page</code> query parameter (defaults to first page).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "profile_id",
            "description": "<p>Profile identifier.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "page",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "from",
            "description": "<p>Filters responses after this date at midnight UTC. Date format should be <code>YYYY-MM-DD</code>.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "to",
            "description": "<p>Filters responses up to this date at 23:59:59. Date format should be <code>YYYY-MM-DD</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "SurveyResponse[]",
            "optional": false,
            "field": "survey_responses",
            "description": "<p>List of responses received for the survey.</p>"
          },
          {
            "group": "200",
            "type": "UUID",
            "optional": false,
            "field": "survey_response.id",
            "description": "<p>Uuid identifier for the response.</p>"
          },
          {
            "group": "200",
            "type": "DateTime",
            "optional": false,
            "field": "survey_response.created_at",
            "description": "<p>DateTime for the creation of the response.</p>"
          },
          {
            "group": "200",
            "type": "Answer[]",
            "optional": false,
            "field": "survey_response.answers",
            "description": "<p>List of answers for questions in the survey.</p>"
          },
          {
            "group": "200",
            "type": "UUID",
            "optional": false,
            "field": "survey_response.answers.id",
            "description": "<p>Uuid identifier for the answer.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "survey_response.answers.answer",
            "description": "<p>String value for the question's answer.</p>"
          },
          {
            "group": "200",
            "type": "Question",
            "optional": false,
            "field": "survey_response.answers.question",
            "description": "<p>Question that corresponds to the answer.</p>"
          },
          {
            "group": "200",
            "type": "UUID",
            "optional": false,
            "field": "survey_response.answers.question.id",
            "description": "<p>Uuid identifier for the answered question.</p>"
          },
          {
            "group": "200",
            "type": "UUID",
            "optional": false,
            "field": "survey_response.answers.question.custom_field_1",
            "description": "<p>Value stored in the question's custom_field_1 field</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "meta.pagination",
            "description": "<p>Contains pagination data</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "meta.pagination.current_page",
            "description": "<p>Index for the current page</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "meta.pagination.next_page",
            "description": "<p>Index for the next page</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "meta.pagination.prev_page",
            "description": "<p>Index for the previous page</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "meta.pagination.total_pages",
            "description": "<p>Total page count</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "meta.survey_responses_count",
            "description": "<p>Total count of returned records</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response",
          "content": "{\n  \"survey_responses\":[\n    {\n      \"id\":\"be1a06da-dae7-491f-b2bd-5acb63e5ffc1\",\n      \"created_at\":\"2017-04-27T20:29:30.363Z\",\n      \"answers\":[\n        {\n          \"id\":\"7f240e45-84f9-4ac8-8764-24a6a4c79f83\",\n          \"answer\":\"Burgundy\",\n          \"question\":{\"id\":\"3e24323e-1f44-44fa-994b-e7e8fbbf1379\"}\n        },\n        {\n          \"id\":\"01001fd8-e953-4628-98dd-c3272f4de1db\",\n          \"answer\":1,\n          \"question\":{\"id\":\"c561361e-829a-400e-978f-3a926e4fff9d\"}\n          },\n          {\n            \"id\":\"868818d3-18e9-43d8-9159-916b2b485848\",\n            \"answer\":\"Some long text could be an answer too.\",\n            \"question\":{\"id\":\"72b1d47f-cdd4-453c-9c68-87cabd6bde1e\", \"custom_field_1\":null}\n          }\n        ]\n      }\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/api/v2/survey_responses_controller.rb",
    "groupTitle": "SurveyResponses"
  },
  {
    "type": "post",
    "url": "/profiles/:profile_id/survey/copy",
    "title": "Copy",
    "name": "Copy",
    "description": "<p>Use this endpoint to copy a Profile's Survey to other profiles under the same API user ownership.</p>",
    "group": "Surveys",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "profile_id",
            "description": "<p>Profile identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID[]",
            "optional": false,
            "field": "profile_ids",
            "description": "<p>Target profile uuid identifiers to copy to, from profile_id.</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/api/v2/surveys_controller.rb",
    "groupTitle": "Surveys"
  },
  {
    "type": "post",
    "url": "/profiles/:profile_id/survey",
    "title": "Create",
    "name": "Create",
    "description": "<p>This endpoint handles survey creation. POST to this endpoint to create a Profile's Survey. Questions parameters will be processed and added to the new Survey.</p>",
    "group": "Surveys",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "profile_id",
            "description": "<p>Profile identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey",
            "description": "<p>SurveyDetails.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey.segmenting_question",
            "description": "<p>Attributes for the question to use as segmenting question. Must be a <code>rating_scale</code> question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey.questions",
            "description": "<p>List of questions to create with the survey.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..256",
            "optional": false,
            "field": "survey.questions.label",
            "description": "<p>Question text.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..256",
            "optional": true,
            "field": "survey.questions.extra_text",
            "description": "<p>Tooltip text.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"text\"",
              "\"rating_scale\"",
              "\"radio\"",
              "\"email\""
            ],
            "optional": false,
            "field": "survey.questions.field_type",
            "description": "<p>Type of question to create.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-10000",
            "optional": false,
            "field": "survey.questions.sort_order",
            "description": "<p>Questions are displayed by this value in ascending order</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "survey.questions.active",
            "description": "<p>Wether to show or hide the question in the survey.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "..256",
            "optional": false,
            "field": "survey.questions.custom_field_1",
            "description": "<p>Can take any value. For client's internal use</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey.questions.options",
            "description": "<p>Set of options to customize question behavior.</p>"
          },
          {
            "group": "Parameter",
            "type": "FieldOptions",
            "optional": false,
            "field": "survey.questions.options.text",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.text.placeholder",
            "description": "<p>Defines content for the placeholder attribute for the text field.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.text.required",
            "description": "<p>Set to any string to mark the field as mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "FieldOptions",
            "optional": false,
            "field": "survey.questions.options.rating_scale",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1..10",
            "optional": false,
            "field": "survey.questions.options.rating_scale.best_rating",
            "description": "<p>Upper limit to the range of scoring options to display. Cannot be equal or lower than <code>worst_rating</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..10",
            "optional": false,
            "field": "survey.questions.options.rating_scale.worst_rating",
            "description": "<p>Lower limit to the range of scoring options to display. Cannot be equal or greater than <code>best_rating</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "survey.questions.options.rating_scale.best_label",
            "description": "<p>Text to display below the last (and highest) radio button label.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "survey.questions.options.rating_scale.worst_label",
            "description": "<p>Text to display below the last (and highest) radio button label.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.rating_scale.required",
            "description": "<p>Set to any string to mark the field as mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "FieldOptions",
            "optional": false,
            "field": "survey.questions.options.radio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.radio.required",
            "description": "<p>Set to any string to mark the field as mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "survey.questions.options.radio.values",
            "description": "<p>Array of objects with the format { label: value } that will be used to populate inputs of radio type. You must provide at least two objects in this array.</p>"
          },
          {
            "group": "Parameter",
            "type": "FieldOptions",
            "optional": false,
            "field": "survey.questions.options.email",
            "description": "<p>And email field is a validated text field that will be hidden if the email of the survey respondent is known.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.email.placeholder",
            "description": "<p>Defines content for the placeholder attribute for the email field.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.email.required",
            "description": "<p>Set to any string to mark the field as mandatory.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample request",
          "content": "{\n  \"survey\":{\n    \"segmenting_question\":{\n      \"label\":\"How likely are you to recommend us to a friend?\",\n      \"field_type\":\"rating_scale\",\n      \"sort_order\":1,\n      \"options\":{\n        \"best_rating\":10,\n        \"worst_rating\":1,\n        \"best_label\":\"Very likely\",\n        \"worst_label\":\"Not likely\"\n      }\n    },\n    \"questions\":[\n      {\n        \"label\":\"First question\",\n        \"extra_text\":\"You cool?\",\n        \"field_type\":\"text\",\n        \"sort_order\":1\n      },\n      {\n        \"label\":\"Do you love cookies?\",\n        \"field_type\":\"radio\",\n        \"sort_order\":3,\n        \"options\":{\n          \"values\":[\n            {\"Yes\":1},\n            {\"No\":0}\n          ]\n        }\n      },\n      {\n        \"label\":\"Second question\",\n        \"extra_text\":\"You cool?\",\n        \"field_type\":\"rating_scale\",\n        \"sort_order\":3,\n        \"options\":{\n          \"best_rating\":10,\n          \"worst_rating\":1,\n          \"best_label\":\"Very likely\",\n          \"worst_label\":\"Not likely\"\n        }\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation failed response",
          "content": "{\n  \"survey\":{\n    \"questions\":[\n      {\n        \"id\":\"bae75525-0ee6-49eb-997a-3c65373ce300\",\n        \"label\":\"Nogo\",\n        \"errors\":{\n          \"label\":[\n            \"is too short (minimum is 5 characters)\"\n          ]\n        }\n      },\n      {\n        \"id\":\"bae75525-0ee6-49eb-997a-3c65373ce301\",\n        \"label\":\"Should not update\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/api/v2/surveys_controller.rb",
    "groupTitle": "Surveys",
    "success": {
      "examples": [
        {
          "title": "Successful response",
          "content": "\n{\n  \"survey\": {\n    \"id\": \"a2078cc7-161d-4dd3-bf4b-f4cc5854084d\",\n    \"segmenting_question\": {\n      \"id\": \"889bcae9-bf76-4468-b405-96917204a301\",\n      \"label\": \"How likely are you to recommend us to a friend?\",\n      \"extra_text\": null,\n      \"field_type\": \"rating_scale\",\n      \"custom_field_1\": null,\n      \"active\": true,\n      \"sort_order\": 1,\n      \"options\": {\n        \"best_rating\": 10,\n        \"worst_rating\": 1,\n        \"best_label\": \"Very likely\",\n        \"worst_label\": \"Not likely\"\n      },\n      \"created_at\": \"2017-04-27T21:53:55.601Z\",\n      \"updated_at\": \"2017-04-27T21:59:54.865Z\"\n    },\n    \"questions\": [\n      {\n        \"id\": \"889bcae9-bf76-4468-b405-96917204a301\",\n        \"label\": \"How likely are you to recommend us to a friend?\",\n        \"extra_text\": null,\n        \"field_type\": \"rating_scale\",\n        \"custom_field_1\": null,\n        \"active\": true,\n        \"sort_order\": 1,\n        \"options\": {\n          \"best_rating\": 10,\n          \"worst_rating\": 1,\n          \"best_label\": \"Very likely\",\n          \"worst_label\": \"Not likely\"\n        },\n        \"created_at\": \"2017-04-27T21:53:55.601Z\",\n        \"updated_at\": \"2017-04-27T21:59:54.865Z\"\n      },\n      {\n        \"id\": \"f91fb3c7-e65f-4b63-9cb1-c749308353f8\",\n        \"label\": \"Second question\",\n        \"extra_text\": \"You cool?\",\n        \"field_type\": \"rating_scale\",\n        \"custom_field_1\": null,\n        \"active\": true,\n        \"sort_order\": 3,\n        \"options\": {\n          \"best_rating\": 10,\n          \"worst_rating\": 1,\n          \"best_label\": \"Very likely\",\n          \"worst_label\": \"Not likely\"\n        },\n        \"created_at\": \"2017-04-27T21:53:55.614Z\",\n        \"updated_at\": \"2017-04-27T21:59:54.871Z\"\n      },\n      {\n        \"id\": \"8089ac66-fccd-43c4-b379-b4b49405ffdc\",\n        \"label\": \"First question\",\n        \"extra_text\": \"You cool?\",\n        \"field_type\": \"text\",\n        \"custom_field_1\": null,\n        \"active\": true,\n        \"sort_order\": 5,\n        \"options\": {},\n        \"created_at\": \"2017-04-27T21:53:55.612Z\",\n        \"updated_at\": \"2017-04-27T22:00:36.969Z\"\n      }\n    ],\n    \"created_at\": \"2017-04-27T21:43:38.518Z\",\n    \"updated_at\": \"2017-04-27T21:53:55.607Z\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/profiles/:profile_id/survey",
    "title": "Show",
    "name": "Show",
    "group": "Surveys",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "profile_id",
            "description": "<p>Profile identifier.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Survey uuid identifier.</p>"
          },
          {
            "group": "200",
            "type": "Question",
            "optional": false,
            "field": "segmenting_question",
            "description": "<p>Survey segmenting question details (if set)</p>"
          },
          {
            "group": "200",
            "type": "Question[]",
            "optional": false,
            "field": "questions",
            "description": "<p>list of questions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response",
          "content": "\n{\n  \"survey\": {\n    \"id\": \"a2078cc7-161d-4dd3-bf4b-f4cc5854084d\",\n    \"segmenting_question\": {\n      \"id\": \"889bcae9-bf76-4468-b405-96917204a301\",\n      \"label\": \"How likely are you to recommend us to a friend?\",\n      \"extra_text\": null,\n      \"field_type\": \"rating_scale\",\n      \"custom_field_1\": null,\n      \"active\": true,\n      \"sort_order\": 1,\n      \"options\": {\n        \"best_rating\": 10,\n        \"worst_rating\": 1,\n        \"best_label\": \"Very likely\",\n        \"worst_label\": \"Not likely\"\n      },\n      \"created_at\": \"2017-04-27T21:53:55.601Z\",\n      \"updated_at\": \"2017-04-27T21:59:54.865Z\"\n    },\n    \"questions\": [\n      {\n        \"id\": \"889bcae9-bf76-4468-b405-96917204a301\",\n        \"label\": \"How likely are you to recommend us to a friend?\",\n        \"extra_text\": null,\n        \"field_type\": \"rating_scale\",\n        \"custom_field_1\": null,\n        \"active\": true,\n        \"sort_order\": 1,\n        \"options\": {\n          \"best_rating\": 10,\n          \"worst_rating\": 1,\n          \"best_label\": \"Very likely\",\n          \"worst_label\": \"Not likely\"\n        },\n        \"created_at\": \"2017-04-27T21:53:55.601Z\",\n        \"updated_at\": \"2017-04-27T21:59:54.865Z\"\n      },\n      {\n        \"id\": \"f91fb3c7-e65f-4b63-9cb1-c749308353f8\",\n        \"label\": \"Second question\",\n        \"extra_text\": \"You cool?\",\n        \"field_type\": \"rating_scale\",\n        \"custom_field_1\": null,\n        \"active\": true,\n        \"sort_order\": 3,\n        \"options\": {\n          \"best_rating\": 10,\n          \"worst_rating\": 1,\n          \"best_label\": \"Very likely\",\n          \"worst_label\": \"Not likely\"\n        },\n        \"created_at\": \"2017-04-27T21:53:55.614Z\",\n        \"updated_at\": \"2017-04-27T21:59:54.871Z\"\n      },\n      {\n        \"id\": \"8089ac66-fccd-43c4-b379-b4b49405ffdc\",\n        \"label\": \"First question\",\n        \"extra_text\": \"You cool?\",\n        \"field_type\": \"text\",\n        \"custom_field_1\": null,\n        \"active\": true,\n        \"sort_order\": 5,\n        \"options\": {},\n        \"created_at\": \"2017-04-27T21:53:55.612Z\",\n        \"updated_at\": \"2017-04-27T22:00:36.969Z\"\n      }\n    ],\n    \"created_at\": \"2017-04-27T21:43:38.518Z\",\n    \"updated_at\": \"2017-04-27T21:53:55.607Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/api/v2/surveys_controller.rb",
    "groupTitle": "Surveys",
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "AuthenticationFailed",
            "description": "<p>The authentication token is incorrect or mising.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n  \"id\":\"authentication_failed\",\n  \"message\":\"Authentication failed. Please check your API token and secret.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/profiles/:profile_id/survey",
    "title": "Update",
    "name": "Update",
    "group": "Surveys",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "profile_id",
            "description": "<p>Profile identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey",
            "description": "<p>SurveyDetails.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey.segmenting_question",
            "description": "<p>Attributes for the question to use as segmenting question. Must be a <code>rating_scale</code> question. You must provide the id field as well.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "survey.questions",
            "description": "<p>List of questions to create with the survey.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "survey.questions.id",
            "description": "<p>Question identifier uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..256",
            "optional": false,
            "field": "survey.questions.label",
            "description": "<p>Question text.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..256",
            "optional": true,
            "field": "survey.questions.extra_text",
            "description": "<p>Tooltip text.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"text\"",
              "\"rating_scale\""
            ],
            "optional": false,
            "field": "survey.questions.field_type",
            "description": "<p>Type of question to create.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-10000",
            "optional": false,
            "field": "survey.questions.sort_order",
            "description": "<p>Questions are displayed by this value in ascending order</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "survey.questions.active",
            "description": "<p>Wether to show or hide the question in the survey.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "..256",
            "optional": false,
            "field": "survey.questions.custom_field_1",
            "description": "<p>Can take any value. For client's internal use</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey.questions.options",
            "description": "<p>Set of options to customize question behavior.</p>"
          },
          {
            "group": "Parameter",
            "type": "FieldOptions",
            "optional": false,
            "field": "survey.questions.options.text",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.text.placeholder",
            "description": "<p>Defines content for the placeholder attribute for the text field.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.text.required",
            "description": "<p>Set to any string to mark the field as mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "FieldOptions",
            "optional": false,
            "field": "survey.questions.options.rating_scale",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1..10",
            "optional": false,
            "field": "survey.questions.options.rating_scale.best_rating",
            "description": "<p>Upper limit to the range of scoring options to display. Cannot be equal or lower than <code>worst_rating</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..10",
            "optional": false,
            "field": "survey.questions.options.rating_scale.worst_rating",
            "description": "<p>Lower limit to the range of scoring options to display. Cannot be equal or greater than <code>best_rating</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "survey.questions.options.rating_scale.best_label",
            "description": "<p>Text to display below the last (and highest) radio button label.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "survey.questions.options.rating_scale.worst_label",
            "description": "<p>Text to display below the last (and highest) radio button label.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "survey.questions.options.rating_scale.required",
            "description": "<p>Set to any string to mark the field as mandatory.</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/api/v2/surveys_controller.rb",
    "groupTitle": "Surveys"
  }
] });
