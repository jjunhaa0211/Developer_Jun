---
title: "Project registration"
slug: "./project-registration"
sidebar_position: 1
---
For project registration, you first need to [register as a user with Immutable X](../getting-started-guide.md#register-a-user-account).

A project is an administrative-level entity that is associated with an owner address, which is your [wallet address](../getting-started-guide.md#wallet). One project can have many associated collections. 
:::caution Project ownership cannot be transferred
Once a project is registered to a particular wallet address (public key), it cannot be changed. Make sure that the wallet you use to register a project is one that you have adequate security management for
:::
## Create a project
The following fields in [imx-examples](https://github.com/immutable/imx-examples/blob/main/docs/onboarding.md) require values to create a project:
- `name` - The name of the project.
- `company_name` - The name of the company.
- `contact_email` - Your associated company email.

After you've edited those fields in the file named: 2-create-project.ts, run the following script to create your project:
```bash title="Create a project"
npm run onboarding:create-project
```
# Project limits
All projects have set limitations on how many collections can be created, and how many mint requests can be made within a four-week period. 

## Collection limits
- Projects are limited to **five** collections within a four-week period.
- The four-week period starts from the moment a collection is created.
- If a collection's request is sent that exceeds this limit, the request will fail, returning an error with a status code of `429` and a message of `Collection limit exceeded`.
- If four weeks have elapsed since the previous collection was created, a new four-week window starts from the time the next request is made.

Project limit information will be included in response headers when a request fails due to the limit being exceeded, and also when a request is successful.

Response header limit information includes:
- `collection_remaining` - How many collections remain for the four-week time period.
- `collection_limit_reset` - The expiry date of the current four-week window.
- `collection_limit` - The collection limit available to the project for each four-week window.

:::info Increase project limits
Project limits, for both minting and collections, can be increased by [contacting customer support](https://support.immutable.com/hc/en-us/requests/new) about your project. Be sure to include your reason for an increase. Our team will respond to your request within 2 business days."
:::
## Minting limits
- Projects are limited to **50,000** mints within a four-week period.
- The four-week period starts when a project's first mint request is made.
- If a mint request is sent that exceeds the limit, the request will fail returning an error with a status code of `429` and a message of `Mint limit exceeded`.
- If four weeks have elapsed since the previous mint, a new four-week window starts from the time the next request is made.

Project limit information will be included in response headers when a request fails due to the limit being exceeded, and also when a request is successful.

Response header limit information includes:
- `mint_remaining` - How many mints remain for the four-week time period.
- `mint_limit_reset` - The expiry date of the current four-week window.
- `mint_limit` - The mint limit available to the project for each four-week window.

## Check limits
Project owners can retrieve project limit information at any time using [get project by ID](https://github.com/immutable/imx-examples/blob/main/docs/administration.md#get-a-project-by-id).  

## Project API calls
- List projects: This will return a list of projects that you are the owner of.
- List project by ID: Get project data according to the ID specified. You must be the owner of the project to retrieve this data.

See our [imx-examples](https://github.com/immutable/imx-examples) repo on GitHub for a [full list of commands](https://github.com/immutable/imx-examples/blob/main/package.json).