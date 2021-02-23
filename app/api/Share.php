<?php

class Share
{
    // Request
    public $Title;
    public $Description;
    public $Pic;

    // og meta
    public $width;
    public $height;
    public $title;
    public $description;
    public $image;

    public $site_root;
    public $url;

    public function __construct()
    {

        // $this->Title = filter_input(INPUT_GET, 'title');
        // $this->Description = filter_input(INPUT_GET, 'Description');

        $this->Title = "資安人員面對的崩潰那麼多，原來我屬於這一種！";
        $this->Description = "快讓IBM幫忙檢測，找出你是哪一型的崩潰？";
        $this->Pic = filter_input(INPUT_GET, 'Pic', FILTER_VALIDATE_INT);
        $this->site_root = 'https://www.our-work.com.tw/demosite/2020/2020-IBM/';
        // $this->site_root = 'http://www.healthtime.com.tw/PowermateQ2/';
    }

    public function main()
    {
        $this->url = "https://www.our-work.com.tw/demosite/2020/2020-IBM/";
        // $this->url = "http://www.healthtime.com.tw/PowermateQ2/?utm_source=fb&utm_medium=fbshare" . $this->Pic;
        $this->setFBmeta();

        include 'SharePage.php';
    }

    public function setFBmeta()
    {
        $this->width = 1200;
        $this->height = 630;

        $this->title = $this->Title;
        $this->description = $this->Description;
        $this->image = $this->site_root . '/images/share/' . $this->Pic . '.jpg?t=' . time();
    }
}

$api = new Share();
$api->main();
