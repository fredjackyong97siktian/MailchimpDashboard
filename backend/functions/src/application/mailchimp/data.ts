const mailchimp = require('@mailchimp/mailchimp_marketing');

interface ParameterI{
    apiKey:string,
    server:string
}

export const mailchimpdata = async({apiKey,server}:ParameterI) => {
    mailchimp.setConfig({
        apiKey: apiKey,
        server: server,
      });
    
    const campaign = await mailchimp.reports.getAllCampaignReports();
    const audience = await mailchimp.lists.getAllLists();
      
    const businessInformation = {data:{campaign : campaign,audience: audience}}
    console.log('From Data')
    console.log(businessInformation);
    return businessInformation
    
}