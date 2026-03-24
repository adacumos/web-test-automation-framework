import { fillInSurveyFormWithUpsell } from 'LaravelEcommerce/_libs/commands/fillInSurveyFormWithUpsell';
import { fillInSupplementOrderFormSurvey } from 'LaravelEcommerce/_libs/commands/fillInSupplementOrderFormSurvey';
import { loginToAdminTool } from './loginToAdminTool';
import { searchAndAddOffer } from './searchAndAddOffer';
import { processPayment } from './processPayment';
import { loginToDeposco } from './loginToDeposco';
import { loginToQuietLogistics } from './loginToQuietLogistics';
import { loginToSculptNationAccount } from './loginToSculptNationAccount';
import { createUserInAdminTool } from './createUserInAdminTool';
import { deleteUserInAdminTool } from './deleteUserInAdminToo';
import { navigateToNewOrderPage } from './navigateToNewOrderPage';
import { addNewShippingAddress } from './addNewShippingAddress';
import { cancelSubscriptionFromAdminTool } from './cancelSubscriptionFromAdminTool';
import { skipVideo } from './skipVideo';
import { checkEmail } from './checkEmail';
import { checkCartOrders } from './checkCartOrders';
import { checkAccountOrders } from './checkAccountOrders';
import { validateOfferPages } from './adminPageCommands/validateOfferPages';
import { createNewLeOffer } from './adminPageCommands/createNewLeOffer';
import { deleteOffersTestData } from './adminPageCommands/deleteOffersTestData';
import { fillInSupplementOrderForm } from './fillInSupplementOrderForm';
import { fillInLeOrderForm } from './fillInLeOrderForm';
import { fillInLeOrderFormInvalidCreditCard } from './fillInLeOrderFormInvalidCreditCard';
import { validateProductsPages } from './adminPageCommands/validateProductsPages';
import { createNewLeProduct } from './adminPageCommands/createNewLeProduct';
import { editLeProducts } from './adminPageCommands/editLeProducts';
import { restoreProductsTestData } from './adminPageCommands/restoreProductsTestData';
import { attachResource } from './adminPageCommands/attachResource';
import { deleteProductsTestData } from './adminPageCommands/deleteProductsTestData';
import { validateRolesPages } from './adminPageCommands/validateRolesPages';
import { addPermissions } from './adminPageCommands/addPermissions';
import { createNewRole } from './adminPageCommands/createNewRole';
import { validatePermissionsPages } from './adminPageCommands/validatePermissionsPage';
import { createNewPermission } from './adminPageCommands/createNewPermission';
import { addRoles } from './adminPageCommands/addRoles';
import { validateDiscountsPages } from './adminPageCommands/validateDiscountsPages';
import { createNewDiscount } from './adminPageCommands/createNewDiscount';
import { getResourceValues } from './adminPageCommands/getResourceValues';
import { editResourceDetails } from './adminPageCommands/editResourceDetail';
import { deleteDiscountsTestData } from './adminPageCommands/deleteDiscountsTestData';
import { filloutCheckoutV3 } from './filloutCheckoutV3';
import { filloutSnCheckoutFb } from './filloutSnCheckoutFb';
import { validatePlansPages } from './adminPageCommands/validatePlansPages';
import { validateOrdersPages } from './adminPageCommands/validateOrdersPages';
import { validateOrderDetails } from './adminPageCommands/validateOrderDetails';
import { validateSubscriptionsPages } from './adminPageCommands/validateSubscriptionsPages';
import { navigateToSubscriptionResource } from './adminPageCommands/navigateToSubscriptionResource';
import { validateSubscriptionResource } from './adminPageCommands/validateSubscriptionResource';
import { validatePaymentsPages } from './adminPageCommands/validatePaymentsPages';
import { validatePaymentResource } from './adminPageCommands/validatePaymentsResource';
import { navigateToPaymentResource } from './adminPageCommands/navigateToPaymentResource';
import { validateShipmentsPages } from './adminPageCommands/validateShipmentsPages';
import { validateShippingCategoriesPages } from './adminPageCommands/validateShippingCategoriesPages';
import { checkEmailContent } from './checkEmailContent';
import { getEmailContent } from './getEmailContent';
import { getEmailData } from './getEmailData';
import { getEmailDataVshred } from './getEmailDataVshred';
import { validateShippingCarriersPages } from './adminPageCommands/validateShippingCarriersPages';
import { createNewCarrier } from './adminPageCommands/createNewCarrier';
import { validateShippingFulfillmentLogsPages } from './adminPageCommands/validateShippingFulfillmentLogsPages';
import { createNewSalesAgent } from './adminPageCommands/createNewSalesAgent';
import { createNewLePlan } from './adminPageCommands/createNewLePlan';
import { deletePlansTestData } from './adminPageCommands/deletePlansTestData';
import { createNewGtin } from './adminPageCommands/createNewGtin';
import { deleteGtinsTestData } from './adminPageCommands/deleteGtinsTestData';
import { deleteProductsTestDataNoTrashed } from './adminPageCommands/deleteProductsTestDataNoTrashed';
import { validatePageSection } from './leWebpages/validatePageSection';
import { viewOrderDetails } from './leWebpages/viewOrderDetails';
import { updateAccountDetails } from './leWebpages/updateAccountDetails';
import { updateUserPassword } from './leWebpages/updateUserPassword';
import { addProductByBottleToCart } from './leWebpages/addProductByBottleToCart';
import { addBundleByBottleToCart } from './leWebpages/addBundleByBottleToCart';
import { createNewAddress } from './adminPageCommands/createNewAddress';
import { createUserViaiFrame } from './adminPageCommands/createUserViaiFrame';
import { executeFileAction } from './adminPageCommands/executeFileAction';
import { executeFolderAction } from './adminPageCommands/executeFolderAction';
import { logoutLeAdmin } from './adminPageCommands/logoutLeAdmin';
import { getLeAdminToken } from './adminPageCommands/getLeAdminToken';
import { loginAsNewAdminUser } from './loginAsNewAdminUser';
import { validateDashboardPage } from './adminPageCommands/validateDashboardPage';
import { validateCheckoutFormPages } from './adminPageCommands/validateCheckoutFormPages';
import { createBumperTemplate } from './adminPageCommands/createBumperTemplate';
import { createBumper } from './adminPageCommands/createBumpers';
import { createCarousel } from './adminPageCommands/createCarousel';
import { createReviews } from './adminPageCommands/createReviews';
import { deleteCheckoutFormRecords } from './adminPageCommands/deleteCheckoutFormRecords';
import { fillInSurveyOrderForm } from './leWebpages/fillInSurveyOrderForm';
import { fillInShippingOrderForm } from './leWebpages/fillInShippingOrderForm';
import { viewFunnelOrderDetails } from './leWebpages/viewFunnelOrderDetails';
import { generateRandomSurveyResponse } from './leWebpages/generateRandomSurveyResponse';
import { checkOrderEmailContents } from './checkOrderEmailContents';
import { randomVsSurveyResponse } from './vsWebpages/randomVsSurveyResponse';
import { loginToVshredAdminTool } from './loginToVshredAdminTool';
import { assignTrainer } from './vsWebpages/assignTrainer';
import { filloutCustomQuestionnaire } from './vsWebpages/filloutCustomQuestionnaire';
import { completeVsMemberProfile } from './vsWebpages/completeVsMemberProfile';
import { filloutLEcheckoutForm } from './filloutLEcheckoutForm';
import { fillInFunnelOrderForm } from './leWebpages/fillInFunnelOrderForm';
import { refundOrderItem } from './adminPageCommands/refundOrderItem';
import { filloutVsOrderForm } from './vsWebpages/filloutVsOrderForm';
import { stordGetShipmentStatus } from './stordCommands/stordGetShipmentStatus';
import { stordCreateShipment } from './stordCommands/stordCreateShipment';
import { stordCancelShipment } from './stordCommands/stordCancelShipment';
import { loginToEnvoyer } from './envoyer/loginToEnvoyer';
import { getKlaviyoMetrics } from './klaviyoApiCommand/getKlaviyoMetrics';
import { checkKlaviyoEvents } from './klaviyoApiCommand/checkKlaviyoEvent';
import { setEnvoyerEnvVar } from './envoyer/setEnvoyerEnvVar';
import { filloutVsUcpCheckout } from './vsWebpages/filloutVsUcpCheckout';
import { filloutPayPalForm } from './filloutPayPalForm';
import { unAssignTrainer } from './vsWebpages/unAssignTrainer';
import { checkOrderForm } from './checkOrderForm';
import { filloutVsEcomCheckout } from './vsWebpages/filloutVsEcomCheckout';
import { selectVsProgram } from './vsWebpages/selectVsProgram';
import { addShippingAndBillingAddressVsAdmin } from './vsWebpages/addShippingAndBillingAddressVsAdmin';
import { addOfferVsAdmin } from './vsWebpages/addOfferVsAdmin';
import { filloutAcceleratorQuestionnaire } from './vsWebpages/filloutAcceleratorQuestionnaire';
import { filloutEliteQuestionnaire } from './vsWebpages/filloutEliteQuestionnaire';
import { filloutVsSurveyCheckout } from './vsWebpages/filloutVsSurveyCheckout';
import { randomNewVsSurveyResponse } from './vsWebpages/randomNewVsSurveyResponse';
import { filloutLegacyVsOrderForm } from './vsWebpages/filloutLegacyVsOrderForm';
import { filloutVsShippingForm } from './vsWebpages/filloutVsShippingForm';
import { checkVsOrderForm } from './vsWebpages/checkVsOrderForm';
import { interceptPixels } from './interceptPixels';
import { verifyPixelDetails } from './verifyPixelDetails';
import { filloutFastCheckoutForm } from './filloutFastCheckoutForm';
import { filloutSNSecureCheckoutForm } from './filloutSNSecureCheckoutForm';
import { filloutVsSecureCheckout } from './vsWebpages/filloutVsSecureCheckout';
import { createSelfRefund } from './selfRefunds/createSelfRefund';
import { checkSelfRefund } from './selfRefunds/checkSelfRefund';
import { filloutVsCheckoutFle } from './vsWebpages/filloutVsCheckoutFle';
import { adyenCheckout } from './adyenCheckout';
import { randomNewBodyTypeSurvey } from './vsWebpages/randomNewBodyTypeSurvey';
import { hormoneQuiz } from './vsWebpages/hormoneQuiz';
import { filloutPaymentInformation } from './filloutPaymentInformation';
import { trackSnapchatEvents } from './trackSnapchatEvents';
import { filloutSecureCheckoutForm } from './filloutSecureCheckoutForm';
import { verifySnapchatPixels } from './verifySnapchatPixels';
import { checkFunnelErrorMessage } from './checkFunnelErrorMessage';
import { filloutFastCheckoutFormWithMissingValues } from './filloutFastCheckoutFormWithMissingValues';
import { filloutFLEFormWithMissingValues } from './filloutFLEFormWithMissingValues';
import { surveyGaRefreshPageTests } from './vsWebpages/surveyGaRefreshPageTests';

export {
    createNewGtin,
    deleteGtinsTestData,
    deleteProductsTestDataNoTrashed,
    loginToAdminTool,
    searchAndAddOffer,
    processPayment,
    loginToDeposco,
    loginToQuietLogistics,
    loginToSculptNationAccount,
    createUserInAdminTool,
    deleteUserInAdminTool,
    navigateToNewOrderPage,
    addNewShippingAddress,
    cancelSubscriptionFromAdminTool,
    skipVideo,
    checkEmail,
    checkEmailContent,
    checkOrderEmailContents,
    getEmailData,
    getEmailDataVshred,
    getEmailContent,
    checkCartOrders,
    checkAccountOrders,
    validateOfferPages,
    createNewLeOffer,
    deleteOffersTestData,
    fillInSurveyOrderForm,
    fillInShippingOrderForm,
    fillInSupplementOrderForm,
    fillInLeOrderForm,
    fillInLeOrderFormInvalidCreditCard,
    validateProductsPages,
    createNewLeProduct,
    editLeProducts,
    restoreProductsTestData,
    attachResource,
    deleteProductsTestData,
    validateRolesPages,
    addPermissions,
    createNewRole,
    validatePermissionsPages,
    createNewPermission,
    addRoles,
    validateDiscountsPages,
    createNewDiscount,
    getResourceValues,
    editResourceDetails,
    deleteDiscountsTestData,
    filloutCheckoutV3,
    filloutSnCheckoutFb,
    validatePlansPages,
    validateOrdersPages,
    validateOrderDetails,
    validateSubscriptionsPages,
    validateSubscriptionResource,
    navigateToSubscriptionResource,
    validatePaymentsPages,
    filloutLEcheckoutForm,
    validatePaymentResource,
    navigateToPaymentResource,
    validateShipmentsPages,
    validateShippingCategoriesPages,
    validateShippingCarriersPages,
    createNewCarrier,
    validateShippingFulfillmentLogsPages,
    createNewSalesAgent,
    createNewLePlan,
    deletePlansTestData,
    validatePageSection,
    viewOrderDetails,
    updateAccountDetails,
    updateUserPassword,
    addProductByBottleToCart,
    addBundleByBottleToCart,
    createNewAddress,
    createUserViaiFrame,
    executeFileAction,
    executeFolderAction,
    logoutLeAdmin,
    getLeAdminToken,
    loginAsNewAdminUser,
    validateDashboardPage,
    validateCheckoutFormPages,
    createBumperTemplate,
    createBumper,
    createCarousel,
    createReviews,
    deleteCheckoutFormRecords,
    viewFunnelOrderDetails,
    generateRandomSurveyResponse,
    randomVsSurveyResponse,
    loginToVshredAdminTool,
    assignTrainer,
    filloutCustomQuestionnaire,
    completeVsMemberProfile,
    fillInFunnelOrderForm,
    fillInSurveyFormWithUpsell,
    fillInSupplementOrderFormSurvey,
    refundOrderItem,
    filloutVsOrderForm,
    stordGetShipmentStatus,
    stordCreateShipment,
    stordCancelShipment,
    loginToEnvoyer,
    getKlaviyoMetrics,
    checkKlaviyoEvents,
    setEnvoyerEnvVar,
    filloutVsUcpCheckout,
    filloutPayPalForm,
    unAssignTrainer,
    checkOrderForm,
    filloutVsEcomCheckout,
    selectVsProgram,
    addShippingAndBillingAddressVsAdmin,
    addOfferVsAdmin,
    filloutAcceleratorQuestionnaire,
    filloutEliteQuestionnaire,
    filloutVsSurveyCheckout,
    randomNewVsSurveyResponse,
    filloutLegacyVsOrderForm,
    filloutVsShippingForm,
    checkVsOrderForm,
    interceptPixels,
    verifyPixelDetails,
    filloutFastCheckoutForm,
    filloutSNSecureCheckoutForm,
    filloutVsSecureCheckout,
    createSelfRefund,
    checkSelfRefund,
    filloutVsCheckoutFle,
    adyenCheckout,
    randomNewBodyTypeSurvey,
    hormoneQuiz,
    filloutPaymentInformation,
    trackSnapchatEvents,
    filloutSecureCheckoutForm,
    verifySnapchatPixels,
    checkFunnelErrorMessage,
    filloutFastCheckoutFormWithMissingValues,
    filloutFLEFormWithMissingValues,
    surveyGaRefreshPageTests,
};
