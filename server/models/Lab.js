const { Schema } = require('mongoose');
//schema for cbc within lab schema
const cbcSchema = new Schema(
  {
    rbc: {
        type: Number,
        required: true
    },
    wbc: {
        type: Number,
        required: true
    },
    platelets: {
        type: Number,
        required: true
    },
    hematocrit: {
        type: Number,
        required: true
    }
  }
);
//schema for cmp within lab schema
const cmpSchema = new Schema(
    {
      sodium: {
          type: Number,
          required: true
      },
      potassium: {
          type: Number,
          required: true
      },
      chloride: {
          type: Number,
          required: true
      },
      calcium: {
          type: Number,
          required: true
      },
      glucose: {
        type: Number,
        required: true
    },
    carbonDioxide: {
        type: Number,
        required: true
    },
    bun: {
        type: Number,
        required: true
    },
    creatinine: {
        type: Number,
        required: true
    },
    alp: {
        type: Number,
        required: true
    },
    alt: {
        type: Number,
        required: true
    },
    ast: {
        type: Number,
        required: true
    },
    bilirubin: {
        type: Number,
        required: true
    },
    albumin: {
        type: Number,
        required: true
    },
    totalProtein: {
        type: Number,
        required: true
    }
    }
  );
  //schema for lipid within lab schema
  const lipidSchema = new Schema(
    {
      total: {
          type: Number,
          required: true
      },
      ldl: {
          type: Number,
          required: true
      },
      hdl: {
          type: Number,
          required: true
      },
      tg: {
          type: Number,
          required: true
      }
    }
  );
//schema for lab within patient model
const labSchema = new Schema(
    {
      date: {
          type: String,
          required: true,
      },
      cbc: cbcSchema,
      cmp: cmpSchema,
      lipid: lipidSchema,
      hb: {
          type: Number
      }
    }
  );

module.exports = labSchema;