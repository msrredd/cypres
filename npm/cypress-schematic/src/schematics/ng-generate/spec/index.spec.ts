/// <reference path="../../../../../../cli/types/mocha/index.d.ts" />

import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing'
import { join } from 'path'
import { expect } from 'chai'

describe('@cypress/schematic:spec ng-generate', () => {
  const schematicRunner = new SchematicTestRunner(
    'schematics',
    join(__dirname, '../../collection.json'),
  )
  let appTree: UnitTestTree

  const workspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '12.0.0',
  }

  const appOptions: Parameters<typeof schematicRunner['runExternalSchematicAsync']>[2] = {
    name: 'sandbox',
    inlineTemplate: false,
    routing: false,
    skipTests: false,
    skipPackageJson: false,
  }

  beforeEach(async () => {
    appTree = await schematicRunner.runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions).toPromise()
    appTree = await schematicRunner.runExternalSchematicAsync('@schematics/angular', 'application', appOptions, appTree).toPromise()
  })

  it('should create cypress e2e spec file by default', async () => {
    return schematicRunner.runSchematicAsync('spec', { name: 'foo', project: 'sandbox' }, appTree).toPromise().then((tree) => {
      const files = tree.files

      expect(files).to.contain('/projects/sandbox/cypress/e2e/foo.cy.ts')
    })
  })

  it('should create cypress ct spec file when testingType is component', async () => {
    return schematicRunner.runSchematicAsync('spec', { name: 'foo', project: 'sandbox', testingType: 'component' }, appTree).toPromise().then((tree) => {
      const files = tree.files

      expect(files).to.contain('/projects/sandbox/cypress/ct/foo.cy.ts')
    })
  })
})
