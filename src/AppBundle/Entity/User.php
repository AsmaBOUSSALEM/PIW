<?php

namespace AppBundle\Entity;

Use FOS\UserBundle\Model\User as BaseUser;
Use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity 
 * @ORM\Table(name="users")
 **/
class User extends BaseUser 
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    Protected $id;
    
}
