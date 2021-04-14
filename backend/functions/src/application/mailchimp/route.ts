//SignUp
import express  from 'express';
import {CallMailchimp,CallBackMailchimp,SaveMailChimp} from './controller';
import {SubscribedContacts,TotalCampaign,UnsubscribedContacts
    ,AudiencePerformance
    ,TotalAudience
    ,ClickRatebyCampaign
    ,OpenRatebyCampaign
    ,UniqueOpensbyCampaign
    ,CampaignPerformance} from './chart';

const router = express.Router();

router.get('/callback', CallBackMailchimp);
router.get('/connect', CallMailchimp);

router.get('/save',SaveMailChimp);

/*chart API */
router.get('/mailsc',SubscribedContacts);
router.get('/mailusc',UnsubscribedContacts);
router.get('/mailap',AudiencePerformance);
router.get('/mailta',TotalAudience);
router.get('/mailcr',ClickRatebyCampaign);
router.get('/mailor',OpenRatebyCampaign);
router.get('/mailuo',UniqueOpensbyCampaign);
router.get('/mailcp',CampaignPerformance);
router.get('/mailtc',TotalCampaign);

export default router;