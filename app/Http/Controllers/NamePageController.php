<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NamePageController extends Controller
{
    function index(){
        return view('NamePage.index');
    }
}
