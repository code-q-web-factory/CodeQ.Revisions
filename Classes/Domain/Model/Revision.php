<?php
declare(strict_types=1);

namespace CodeQ\Revisions\Domain\Model;

/**
 * This file is part of the CodeQ.Revisions package.
 *
 * (c) 2022 CodeQ
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

use Doctrine\ORM\Mapping as ORM;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\PersistenceManagerInterface;
use Neos\Flow\Utility\Now;

/**
 * @Flow\Entity
 */
class Revision
{

    /**
     * @var \DateTime
     */
    protected $creationDateTime;

    /**
     * @var string
     */
    protected $creator;

    /**
     * @var string
     * @ORM\Column(type="blob")
     */
    protected $content;

    /**
     * @var string
     */
    protected $nodeIdentifier;

    /**
     * @var string
     * @ORM\Column(nullable=true)
     */
    protected $label;

    /**
     * @Flow\Inject
     * @var PersistenceManagerInterface
     */
    protected $persistenceManager;

    public function __construct(string $nodeIdentifier, string $creator, string $content, string $label = null, bool $compress = true)
    {
        $this->creationDateTime = new Now();
        $this->creator = $creator;
        $this->nodeIdentifier = $nodeIdentifier;
        $this->content = $compress ? $this->compress($content) : $content;
        $this->label = $label;
    }

    protected function compress(string $content): string
    {
        try {
            return bzcompress($content, 9);
        } catch (\Exception $e) {
        }
        return $content;
    }

    protected function decompress(string $content): string
    {
        try {
            return bzdecompress($content);
        } catch (\Exception $e) {
        }
        return $content;
    }

    public function getCreationDateTime(): \DateTime
    {
        return $this->creationDateTime;
    }

    public function getNodeIdentifier(): string
    {
        return $this->nodeIdentifier;
    }

    public function getCreator(): string
    {
        return $this->creator;
    }

    public function getContent(): ?\XMLReader
    {
        $content = stream_get_contents($this->content);
        $content = strpos($content, 'BZ') === 0 ? $this->decompress($content) : $content;
        rewind($this->content);

        if (!$content) {
            return null;
        }

        $xmlReader = new \XMLReader();
        $result = $xmlReader::xml($content, null, LIBXML_PARSEHUGE);

        return !is_bool($result) ? $result : null;
    }

    public function getIdentifier(): string
    {
        return $this->persistenceManager->getIdentifierByObject($this);
    }

    public function getLabel(): string
    {
        return $this->label ?? '';
    }

    public function setLabel(string $label): void
    {
        $this->label = $label;
    }

}
