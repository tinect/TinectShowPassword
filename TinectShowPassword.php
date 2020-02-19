<?php

namespace TinectShowPassword;

use Shopware\Components\Plugin;
use Shopware\Components\Plugin\Context\ActivateContext;
use Shopware\Components\Plugin\Context\InstallContext;
use Shopware\Components\Plugin\Context\UpdateContext;

class TinectShowPassword extends Plugin
{

    public static function getSubscribedEvents()
    {
        return [
            'Enlight_Controller_Action_PostDispatchSecure_Frontend' => 'onFrontendDispatch'
        ];
    }

    public function onFrontendDispatch(\Enlight_Controller_ActionEventArgs $args)
    {
        $subject = $args->getSubject();

        $subject->View()->addTemplateDir($this->getPath() . '/Resources/Views/');
    }

    public function activate(ActivateContext $context)
    {
        $context->scheduleClearCache(InstallContext::CACHE_LIST_ALL);
    }

    public function update(UpdateContext $context)
    {
        $context->scheduleClearCache(InstallContext::CACHE_LIST_ALL);
    }

    public function install(InstallContext $context)
    {
    }


}
