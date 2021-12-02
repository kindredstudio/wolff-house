<?php

// Custom Post Types
// Note that you only need the arguments and register_post_type function here. They are hooked into WordPress in functions.php.
// For a full list of parameters see https://developer.wordpress.org/reference/functions/register_post_type/ or use https://generatewp.com/post-type/ to generate the code for you.

// register Current Projects post type
$labels = array(
		'name'               => _x( 'Current Projects', 'post type general name', 'kindred' ),
		'singular_name'      => _x( 'Current Project', 'post type singular name', 'kindred' ),
		'menu_name'          => _x( 'Current Projects', 'admin menu', 'kindred' ),
		'name_admin_bar'     => _x( 'In the Works', 'add new on admin bar', 'kindred' ),
		'add_new'            => _x( 'Add New', 'book', 'kindred' ),
		'add_new_item'       => __( 'Add New Project', 'kindred' ),
		'new_item'           => __( 'New Project', 'kindred' ),
		'edit_item'          => __( 'Edit Project', 'kindred' ),
		'view_item'          => __( 'View Project', 'kindred' ),
		'all_items'          => __( 'All Current Projects', 'kindred' ),
		'search_items'       => __( 'Search Current Projects', 'kindred' ),
		'parent_item_colon'  => __( 'Parent Projects:', 'kindred' ),
		'not_found'          => __( 'No projects found.', 'kindred' ),
		'not_found_in_trash' => __( 'No projects found in Trash.', 'kindred' )
	);

	$args = array(
		'labels'             => $labels,
		'description'        => __( 'Current portfolio projects', 'kindred' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'projects' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' )
	);

	register_post_type( 'projects', $args );

// register Past Projects post type
$labels = array(
	'name'               => _x( 'Past Projects', 'post type general name', 'kindred' ),
	'singular_name'      => _x( 'Past Project', 'post type singular name', 'kindred' ),
	'menu_name'          => _x( 'Past Projects', 'admin menu', 'kindred' ),
	'name_admin_bar'     => _x( 'Past Work', 'add new on admin bar', 'kindred' ),
	'add_new'            => _x( 'Add New', 'book', 'kindred' ),
	'add_new_item'       => __( 'Add New Project', 'kindred' ),
	'new_item'           => __( 'New Project', 'kindred' ),
	'edit_item'          => __( 'Edit Project', 'kindred' ),
	'view_item'          => __( 'View Project', 'kindred' ),
	'all_items'          => __( 'All Past Projects', 'kindred' ),
	'search_items'       => __( 'Search Past Projects', 'kindred' ),
	'parent_item_colon'  => __( 'Parent Projects:', 'kindred' ),
	'not_found'          => __( 'No projects found.', 'kindred' ),
	'not_found_in_trash' => __( 'No projects found in Trash.', 'kindred' )
);

$args = array(
	'labels'             => $labels,
	'description'        => __( 'Past portfolio projects', 'kindred' ),
	'public'             => true,
	'publicly_queryable' => true,
	'show_ui'            => true,
	'show_in_menu'       => true,
	'query_var'          => true,
	'rewrite'            => array( 'slug' => 'past-projects' ),
	'capability_type'    => 'post',
	'has_archive'        => true,
	'hierarchical'       => false,
	'menu_position'      => null,
	'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' )
);

register_post_type( 'past-projects', $args );
