<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterPageController extends Controller
{
    function index(){
        return view('RegisterPage.index');
    }
}
