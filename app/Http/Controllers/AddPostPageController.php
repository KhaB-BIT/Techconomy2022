<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddPostPageController extends Controller
{
    function index(){
        return view('AddPostPage.index');
    }
}
