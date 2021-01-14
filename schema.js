const schema = `
type Query {
    version: String!
    talents: [Talent!]!
    openJobs: [Jobs!]!
}

type Talent {
    name: String
    age: String
    linkedin: String
    notes: String
}

type Jobs {
    title: String
    description: String
    needs: String
    requirements: String
}


`;

module.exports = { schema } ;