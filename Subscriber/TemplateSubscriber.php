<?php

namespace TinectShowPassword\Subscriber;

use Enlight\Event\SubscriberInterface;

class TemplateSubscriber implements SubscriberInterface
{
    /**
     * @var string
     */
    private $viewDir;

    /**
     * @param string $viewDir
     */
    public function __construct($viewDir)
    {
        $this->viewDir = $viewDir;
    }

    public static function getSubscribedEvents()
    {
        return [
            'Theme_Inheritance_Template_Directories_Collected' => 'onTemplateDirectoriesCollect',
        ];
    }

    public function onTemplateDirectoriesCollect(\Enlight_Event_EventArgs $args)
    {
        $dirs = $args->getReturn();

        $dirs[] = $this->viewDir;

        $args->setReturn($dirs);
    }
}
