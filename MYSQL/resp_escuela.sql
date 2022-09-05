-- MySQL Script generated by MySQL Workbench
-- Mon Sep  5 13:25:04 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema escuela
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `escuela` ;

-- -----------------------------------------------------
-- Schema escuela
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `escuela` DEFAULT CHARACTER SET utf8 ;
USE `escuela` ;

-- -----------------------------------------------------
-- Table `escuela`.`alumno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`alumno` ;

CREATE TABLE IF NOT EXISTS `escuela`.`alumno` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` INT NULL,
  `materia` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`prof`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`prof` ;

CREATE TABLE IF NOT EXISTS `escuela`.`prof` (
  `id` INT NOT NULL,
  `nombre` INT NULL,
  `apellido` VARCHAR(45) NULL,
  `alumno_id` INT NOT NULL,
  PRIMARY KEY (`id`, `alumno_id`),
  INDEX `fk_prof_alumno1_idx` (`alumno_id` ASC) VISIBLE,
  CONSTRAINT `fk_prof_alumno1`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `escuela`.`alumno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`materia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`materia` ;

CREATE TABLE IF NOT EXISTS `escuela`.`materia` (
  `codigo` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `version` VARCHAR(45) NOT NULL,
  `grado` VARCHAR(45) NOT NULL,
  `alumno_id` INT NOT NULL,
  `prof_id` INT NOT NULL,
  PRIMARY KEY (`codigo`, `prof_id`),
  INDEX `fk_materia_alumno_idx` (`alumno_id` ASC) VISIBLE,
  INDEX `fk_materia_prof1_idx` (`prof_id` ASC) VISIBLE,
  CONSTRAINT `fk_materia_alumno`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `escuela`.`alumno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_materia_prof1`
    FOREIGN KEY (`prof_id`)
    REFERENCES `escuela`.`prof` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
